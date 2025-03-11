const { SlideOne } = require("../../models"); // Adjust the path as necessary
const fs = require("fs").promises; // Using the promise-based version of 'fs' for better handling
const path = require("path");

// Helper to delete old files
const deleteFile = async (filePath) => {
  const fullPath = path.resolve(
    __dirname,
    "..",
    "..",
    "uploads",
    path.basename(filePath)
  );
  try {
    await fs.unlink(fullPath);
    console.log("File deleted successfully:", fullPath);
  } catch (err) {
    console.error("Failed to delete file:", fullPath, err);
  }
};

const getSlideOne = async (req, res) => {
  try {
    const slide = await SlideOne.findOne(); // Assuming only one slide will exist
    if (!slide) {
      return res
        .status(404)
        .json({ status: "fail", message: "No slide found" });
    }
    res.status(200).json({ status: "success", data: slide });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Error fetching slide",
      error: error.message,
    });
  }
};

// Add Slide One
const addSlideOne = async (req, res) => {
  const existingSlide = await SlideOne.findOne();
  if (existingSlide) {
    return res.status(400).json({
      status: "fail",
      message:
        "A slide already exists. Please delete the existing slide before uploading a new one.",
    });
  }

  const { file } = req;
  if (!file) {
    return res
      .status(400)
      .json({ status: "fail", message: "No image file provided" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    file.filename
  }`;
  const newSlide = new SlideOne({ slideOne: imageUrl });

  await newSlide.save();
  res.status(201).json({
    status: "success",
    message: "Slide One added successfully",
    data: { imageUrl },
  });
};

// Delete Slide One
const deleteSlideOne = async (req, res) => {
  const slide = await SlideOne.findOne();
  if (!slide) {
    return res
      .status(404)
      .json({ status: "fail", message: "No slide found to delete." });
  }

  // Delete the image file from the filesystem
  await deleteFile(slide.slideOne);

  // Delete the slide from the database
  await SlideOne.deleteOne();
  res.status(200).json({
    status: "success",
    message: "Slide One deleted successfully",
  });
};

// Edit SlideOne
const editSlideOne = async (req, res) => {
  if (!req.file) return res.status(400).send("No new file uploaded");

  try {
    const updatedSlide = await SlideOne.findById(req.params.id);

    // Delete old file if new one is uploaded
    if (updatedSlide.slideOne) {
      deleteFile(updatedSlide.slideOne);
    }

    updatedSlide.slideOne = req.file.path;
    await updatedSlide.save();

    res
      .status(200)
      .json({ message: "Slide One updated successfully", data: updatedSlide });
  } catch (error) {
    res.status(500).json({ message: "Error updating slide", error });
  }
};

module.exports = {
  addSlideOne,
  getSlideOne,
  editSlideOne,
  deleteSlideOne,
};
