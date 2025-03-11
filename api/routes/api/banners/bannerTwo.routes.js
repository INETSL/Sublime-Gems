const router = require("express").Router();
const { bannerTwo } = require("../../../controller");

router.get("/", bannerTwo.getBannerTwo);
router.post("/", bannerTwo.addBannerTwo);
router.patch("/:id", bannerTwo.editBannerTwo);
router.delete("/:id", bannerTwo.deleteBannerTwo);

module.exports = router;
