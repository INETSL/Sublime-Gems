const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const slideOneSchema = new Schema(
  {
    slideOne: { type: String },
  },
  { timestamps: true }
);

module.exports = model("SlideOne", slideOneSchema);
