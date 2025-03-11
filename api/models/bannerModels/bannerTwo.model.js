const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const bannerTwoSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("BannerTwo", bannerTwoSchema);
