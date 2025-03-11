const router = require("express").Router();
const { slideOne } = require("../../../controller");
const uploadSingle = require("../../../middleware/uploadSilgle.middleware");

router.get("/", slideOne.getSlideOne);
router.post("/", uploadSingle("slideOne"), slideOne.addSlideOne);
router.patch("/:id", uploadSingle("slideOne"), slideOne.editSlideOne);
router.delete("/", slideOne.deleteSlideOne);

module.exports = router;
