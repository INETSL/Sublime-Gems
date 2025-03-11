const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const refreshSchema = new Schema({
  refreshToken: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "Auth", required: true },
  expires: { type: Date, required: true },
});

module.exports = model("RefreshToken", refreshSchema);
