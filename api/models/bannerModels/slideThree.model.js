const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const slideThreeSchema = new Schema(
  {
    slideThree: { type: String },
  },
  { timestamps: true }
);

module.exports = model("SlideThree", slideThreeSchema);
