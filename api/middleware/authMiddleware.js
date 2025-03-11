const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.cookies.jwt; // Extract token from cookie

  if (!token) {
    return res
      .status(401)
      .json({ status: "fail", message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId, role: decoded.role };
    next();
  } catch (error) {
    res.status(401).json({ status: "fail", message: "Invalid token" });
  }
};

module.exports = authenticate;
