const { Auth, RefreshToken } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authSchema } = require("../schemas");

const createUser = async (req, res) => {
  try {
    // Validate request body
    const { value, error } = authSchema.authSchema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ status: "fail", message: error.details[0].message });
    }

    const { email, password } = value;

    // Check if user already exists
    if (await Auth.findOne({ email })) {
      return res
        .status(400)
        .json({ status: "fail", message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Auth({
      email,
      password: hashedPassword,
    });

    await user.save();

    res
      .status(201)
      .json({ status: "success", message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

// ✅ Login User
const login = async (req, res) => {
  try {
    const { value, error } = authSchema.authSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ status: "fail", message: error.details[0].message });
    }

    const { email, password } = value;
    const user = await Auth.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" } // Access token expires in 15 minutes
    );

    // Create and store refresh token
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" } // Refresh token validity
    );

    const refreshTokenDoc = new RefreshToken({
      refreshToken,
      user: user._id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    });
    await refreshTokenDoc.save();

    // Set both tokens in http-only cookies
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true, // for HTTPS
      sameSite: "strict", // CSRF protection
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true, // for HTTPS
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ status: "success", message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message:
        "User logged out successfully. Remove token from client storage.",
    });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    // ✅ Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    // ✅ Check if the user is an admin
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ status: "fail", message: "Access denied. Admins only." });
    }

    // ✅ Fetch all users, excluding passwords for security
    const users = await Auth.find().select("-password");

    // ✅ Return users
    res.status(200).json({
      status: "success",
      message: "All users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve users", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from URL

    // ✅ Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    // ✅ Restrict access: Only the user themselves or an admin can view the data
    if (req.user.userId !== id && req.user.role !== "admin") {
      return res.status(403).json({ status: "fail", message: "Access denied" });
    }

    // ✅ Fetch user data, excluding the password
    const user = await Auth.findById(id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    // ✅ Return user data
    res.status(200).json({
      status: "success",
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve user", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from URL
    const { email, password, role } = req.body;

    // ✅ Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    // ✅ Restrict access: Only the user themselves or an admin can update the data
    if (req.user.userId !== id && req.user.role !== "admin") {
      return res.status(403).json({ status: "fail", message: "Access denied" });
    }

    // ✅ Find the user in the database
    const user = await Auth.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    // ✅ Prevent normal users from updating their role
    if (role && req.user.role !== "admin") {
      return res.status(403).json({
        status: "fail",
        message: "You are not allowed to change the role",
      });
    }

    // ✅ Update only the fields provided
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    if (req.user.role === "admin" && role) {
      user.role = role; // Admin can update role
    }

    // ✅ Save updated user details
    const updatedUser = await user.save();

    // ✅ Return updated user data (excluding password)
    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: {
        _id: updatedUser._id,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract user ID from URL

    // ✅ Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    // ✅ Restrict access: Only the user themselves or an admin can delete the account
    if (req.user.userId !== id && req.user.role !== "admin") {
      return res.status(403).json({ status: "fail", message: "Access denied" });
    }

    // ✅ Find the user in the database
    const user = await Auth.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    // ✅ Prevent admin from deleting themselves (Optional)
    if (req.user.userId === id && req.user.role === "admin") {
      return res
        .status(403)
        .json({ status: "fail", message: "Admins cannot delete themselves" });
    }

    // ✅ Delete the user from the database
    await Auth.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  logout,
};
