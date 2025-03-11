const mongoose = require("mongoose");

const connectDB = () => {
  console.log("MONGO_URL from .env:", process.env.MONGO_URL); // Debug log
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB ✔");
    })
    .catch((err) => {
      console.error(
        `Error occurred while connecting to MongoDB ❌: ${err.message}`
      );
      process.exit(1); // Exit the application on failure
    });
};

module.exports = connectDB;
