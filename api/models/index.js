const Auth = require("./auth.model");
const RefreshToken = require("./refreshToken.model");
const Product = require("./produd.model");
const CtgryGemstomes = require("./ctgryModels/ctGemstones.model");
const CtgryShapes = require("./ctgryModels/ctShape.model");
const CtgryOrigins = require("./ctgryModels/ctOrigins.model");
const CtgryColours = require("./ctgryModels/ctColours.model");
const CtgrySelections = require("./ctgryModels/ctSelections.model");
const BannerOne = require("./bannerModels/bannerOne.model");
const BannerTwo = require("./bannerModels/bannerTwo.model");
const SlideOne = require("./bannerModels/slideOne.model");
const SlideTwo = require("./bannerModels/slideTwo.model");
const SlideThree = require("./bannerModels/slideThree.model");

module.exports = {
  Auth,
  RefreshToken,
  Product,
  CtgryGemstomes,
  CtgryShapes,
  CtgryOrigins,
  CtgryColours,
  CtgrySelections,
  BannerOne,
  BannerTwo,
  SlideOne,
  SlideTwo,
  SlideThree,
};
