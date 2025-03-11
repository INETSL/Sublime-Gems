const router = require("express").Router();
const { bannerOne } = require("../../../controller");

router.get("/", bannerOne.getBannerOne);
router.post("/", bannerOne.addBannerOne);
router.patch("/:id", bannerOne.editBannerOne);
router.delete("/:id", bannerOne.deleteBannerOne);

module.exports = router;
