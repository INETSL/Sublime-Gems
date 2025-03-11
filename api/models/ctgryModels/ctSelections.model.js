const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ctSelectionsSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("ctSelections", ctSelectionsSchema);
