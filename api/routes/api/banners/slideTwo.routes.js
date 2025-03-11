const router = require("express").Router();
const { slideTwo } = require("../../../controller");
const uploadSingle = require("../../../middleware/uploadSilgle.middleware");

router.get("/", slideTwo.getSlideTwo);
router.post("/", uploadSingle("slideTwo"), slideTwo.addSlideTwo);
router.patch("/:id", uploadSingle("slideTwo"), slideTwo.editSlideTwo);
router.delete("/", slideTwo.deleteSlideTwo);

module.exports = router;
