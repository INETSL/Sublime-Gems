const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, "../uploads");
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

const uploadProductImages = upload.fields([
  { name: "thumbnail", maxCount: 1 }, // Handle single thumbnail upload
  { name: "images", maxCount: 10 }, // Handle multiple image uploads
]);

module.exports = { uploadProductImages };
