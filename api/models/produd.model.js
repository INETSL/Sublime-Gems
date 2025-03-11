const mondoose = require("mongoose");
const { Schema, model } = mondoose;

const productSchema = new Schema(
  {
    itemid: { type: String, unique: true },
    title: { type: String, required: true },
    gemType: { type: String, required: true },
    shape: { type: String, required: true },
    weight: { type: Number, required: true },
    measurements: { type: String, required: true },
    colour: { type: String, required: true },
    clarity: { type: String, required: true },
    treatment: { type: String, required: true },
    origin: { type: String, required: true },
    selection: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String },
    images: [{ type: String }],
    video: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
