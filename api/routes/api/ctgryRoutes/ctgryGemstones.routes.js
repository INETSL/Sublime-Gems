const router = require("express").Router();
const { ctgryGemstones } = require("../../../controller");
const uploadSingle = require("../../../middleware/uploadSilgle.middleware");

router.get("/", ctgryGemstones.getGemstones);
router.post("/", uploadSingle("image"), ctgryGemstones.addGemstones);
router.patch("/:id", uploadSingle("image"), ctgryGemstones.editGemstones);
router.delete("/:id", ctgryGemstones.deleteGemstones);

module.exports = router;
