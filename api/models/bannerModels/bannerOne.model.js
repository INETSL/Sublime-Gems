const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const bannerOneSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("BannerOne", bannerOneSchema);
