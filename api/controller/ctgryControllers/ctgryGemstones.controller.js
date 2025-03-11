const { CtgryGemstomes } = require("../../models");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

const addGemstones = async (req, res) => {
  const { title } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "Image file is required" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    file.filename
  }`;

  const gemstone = new CtgryGemstomes({
    title,
    image: imageUrl,
  });

  try {
    await gemstone.save();
    res
      .status(201)
      .json({ message: "Gemstone added successfully", data: gemstone });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add gemstone", error: error.message });
  }
};

const getGemstones = async (req, res) => {
  try {
    // Fetch all gemstones and sort them alphabetically by the 'title' field
    const gemstones = await CtgryGemstomes.find({}).sort("title"); // 'title' for ascending order
    if (gemstones.length === 0) {
      return res
        .status(404)
        .json({ status: "fail", message: "No gemstones found" });
    }
    res.status(200).json({ status: "success", data: gemstones });
  } catch (error) {
    console.error("Error fetching gemstones:", error);
    res.status(500).json({
      status: "fail",
      message: "Error fetching gemstones",
      error: error.message,
    });
  }
};

const editGemstones = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const file = req.file;

    const gemstone = await CtgryGemstomes.findById(id);

    if (!gemstone) {
      return res
        .status(404)
        .json({ status: "fail", message: "Gemstone not found" });
    }

    //update title if provided
    if (title) gemstone.title = title;

    //Update image if a new file is uploaded
    if (file) {
      gemstone.image = `${req.protocol}://${req.get("host")}/uploads/${
        file.filename
      }`;
    }

    await gemstone.save();
    res
      .status(200)
      .json({ status: "success", message: "Gemstone updated successfully" });
  } catch (error) {
    console.error("Error fetching gemstones:", error);
    res.status(500).json({
      status: "fail",
      message: "Error fetching gemstones",
      error: error.message,
    });
  }
};

const deleteGemstones = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const gemstone = await CtgryGemstomes.findById(id);
    if (!gemstone) {
      return res.status(404).json({ message: "Gemstone not found" });
    }

    // Check if there's an image and try to delete it
    if (gemstone.image) {
      const imagePath = path.join(
        __dirname,
        "../../uploads",
        path.basename(gemstone.image)
      );
      if (fs.existsSync(imagePath)) {
        try {
          fs.unlinkSync(imagePath);
        } catch (error) {
          // Log the file deletion error but do not stop the process
          console.error("Error deleting the image file:", error);
        }
      }
    }

    // Delete the gemstone document from the database
    await CtgryGemstomes.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Gemstone deleted successfully",
    });
  } catch (error) {
    console.error("Error processing gemstone deletion:", error);
    res.status(500).json({
      status: "fail",
      message: "Error deleting gemstone",
      error: error.message,
    });
  }
};

module.exports = {
  addGemstones,
  getGemstones,
  editGemstones,
  deleteGemstones,
};
