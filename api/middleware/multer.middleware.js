const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("Uploads directory created");
} else {
  console.log("Uploads directory already exists");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Destination path:", uploadsDir); // Debug log
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname;
    console.log("Writing file:", filename); // Debug log
    cb(null, filename);
  },
});

const uploadMultiple = multer({ storage }).array("images", 10);

module.exports = { uploadMultiple };
