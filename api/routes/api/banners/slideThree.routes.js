const router = require("express").Router();
const { slideThree } = require("../../../controller");
const uploadSingle = require("../../../middleware/uploadSilgle.middleware");

router.get("/", slideThree.getSlideThree);
router.post("/", uploadSingle("slideThree"), slideThree.addSlideThree);
router.patch("/:id", uploadSingle("slideThree"), slideThree.editSlideThree);
router.delete("/", slideThree.deleteSlideThree);

module.exports = router;
