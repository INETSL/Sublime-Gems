const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const slideTwoSchema = new Schema(
  {
    slideTwo: { type: String },
  },
  { timestamps: true }
);

module.exports = model("SlideTwo", slideTwoSchema);
