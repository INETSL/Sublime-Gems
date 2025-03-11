const authController = require("./auth.controller");
const productController = require("./product.controller");

//Categories
const ctgryGemstones = require("./ctgryControllers/ctgryGemstones.controller");
const ctgryShapes = require("./ctgryControllers/ctgryShapes.controller");
const ctgryColours = require("./ctgryControllers/ctgryColours.controller");
const ctgryOrigins = require("./ctgryControllers/ctgryOrigins.controller");
const ctgrySelections = require("./ctgryControllers/ctgrySelections.controller");

//Banners
const bannerOne = require("./bannerControllers/bannerOne.controller");
const bannerTwo = require("./bannerControllers/bannerTwo.controller");
const slideOne = require("./bannerControllers/slideOne.controller");
const slideTwo = require("./bannerControllers/slideTwo.controller");
const slideThree = require("./bannerControllers/slideThree.controller");

module.exports = {
  authController,
  productController,
  ctgryGemstones,
  ctgryShapes,
  ctgryColours,
  ctgryOrigins,
  ctgrySelections,
  bannerOne,
  bannerTwo,
  slideOne,
  slideTwo,
  slideThree,
};
