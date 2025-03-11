const router = require("express").Router();

const authRouter = require("./auth.routes");
const productRouter = require("./product.routes");

const ctgryGemstones = require("./ctgryRoutes/ctgryGemstones.routes");
const ctgryShapes = require("./ctgryRoutes/ctgryShapes.routes");
const ctgrySelections = require("./ctgryRoutes/ctgrySelections.routes");
const ctgryColours = require("./ctgryRoutes/ctgryColours.routes");
const ctgryOrigins = require("./ctgryRoutes/ctgryOrigins.routes");

const bannerOne = require("./banners/bannerOne.routes");
const bannerTwo = require("./banners/bannerTwo.routes");
const slideOne = require("./banners/slideOne.routes");
const slideTwo = require("./banners/slideTwo.routes");
const slideThree = require("./banners/slideThree.routes");

//auth route
router.use("/auth", authRouter);
router.use("/product", productRouter);

//Categories
router.use("/ctgryGemstones", ctgryGemstones);
router.use("/ctgryShapes", ctgryShapes);
router.use("/ctgrySelections", ctgrySelections);
router.use("/ctgryColours", ctgryColours);
router.use("/ctgryOrigins", ctgryOrigins);

//Banners
router.use("/bannerOne", bannerOne);
router.use("/bannerTwo", bannerTwo);
router.use("/slideOne", slideOne);
router.use("/slideTwo", slideTwo);
router.use("/slideThree", slideThree);

module.exports = router;
