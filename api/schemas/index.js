const { productSchema, updateProductSchema } = require("./product.schema");
const {
  createBannerTwoSchema,
  createBannerOneSchema,
} = require("./bannerOne.schema");
const categorySchema = require("./catergory.schema");
const authSchema = require("./auth.schema");

module.exports = {
  productSchema,
  updateProductSchema,
  createBannerTwoSchema,
  createBannerOneSchema,
  categorySchema,
  authSchema,
};
