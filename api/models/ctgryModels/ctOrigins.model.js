const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ctOriginsSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("ctOrigins", ctOriginsSchema);
