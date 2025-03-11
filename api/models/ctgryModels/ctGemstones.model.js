const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ctGemstonesSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("ctGemstones", ctGemstonesSchema);
