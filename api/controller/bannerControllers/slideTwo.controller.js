const { SlideTwo } = require("../../models");
const fs = require("fs").promises; // Using the promise-based version of 'fs' for better handling
const path = require("path");

// Helper to delete old files
const deleteFile = async (filePath) => {
  if (!filePath) {
    console.error("No file path provided for deletion.");
    return;
  }

  const fullPath = path.resolve(
    __dirname,
    "../../uploads",
    path.basename(filePath)
  );
  try {
    await fs.access(fullPath); // Check if the file exists
    await fs.unlink(fullPath);
    console.log("File deleted successfully:", fullPath);
  } catch (err) {
    console.error("Failed to delete file:", fullPath, err);
  }
};

const addSlideTwo = async (req, res) => {
  const existingSlide = await SlideTwo.findOne();
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
  const newSlide = new SlideTwo({ slideTwo: imageUrl });

  await newSlide.save();
  res.status(201).json({
    status: "success",
    message: "Slide One added successfully",
    data: { imageUrl },
  });
};

const getSlideTwo = async (req, res) => {
  try {
    const slide = await SlideTwo.findOne(); // Assuming only one slide will exist
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

const deleteSlideTwo = async (req, res) => {
  const slide = await SlideTwo.findOne();
  if (!slide) {
    return res
      .status(404)
      .json({ status: "fail", message: "No slide found to delete." });
  }

  // Attempt to delete the image file from the filesystem
  await deleteFile(slide.slideTwo);

  // Proceed to delete the slide record only if the file deletion was successful
  await SlideTwo.deleteOne();
  res.status(200).json({
    status: "success",
    message: "Slide Two deleted successfully",
  });
};

const editSlideTwo = async (req, res) => {};

module.exports = {
  addSlideTwo,
  getSlideTwo,
  editSlideTwo,
  deleteSlideTwo,
};
