const multer = require("multer");
const path = require("path");

// Configure the storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Adjust the path as needed
  },
  filename: (req, file, cb) => {
    // Create a unique filename to prevent conflicts and maintain original file extension
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname.replace(ext, "")}${ext}`);
  },
});

// Factory function to create a middleware for uploading a single image
const uploadSingle = (fieldName) => {
  return multer({ storage }).single(fieldName);
};

module.exports = uploadSingle;
