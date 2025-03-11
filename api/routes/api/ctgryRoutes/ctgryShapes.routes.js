const router = require("express").Router();
const { ctgryShapes } = require("../../../controller");
const uploadSingle = require("../../../middleware/uploadSilgle.middleware");

router.get("/", ctgryShapes.getShapes);
router.post("/", uploadSingle("image"), ctgryShapes.addShapes);
router.patch("/", uploadSingle("image"), ctgryShapes.editShapes);
router.delete("/", ctgryShapes.deleteShapes);

module.exports = router;
