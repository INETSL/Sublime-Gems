const router = require("express").Router();
const { bannerThree } = require("../../../controller");

router.get("/", bannerThree.getBannerThree);
router.post("/", bannerThree.addBannerThree);
router.patch("/:id", bannerThree.editBannerThree);
router.delete("/:id", bannerThree.deleteBannerThree);

module.exports = router;
