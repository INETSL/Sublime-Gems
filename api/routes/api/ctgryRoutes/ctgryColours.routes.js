const router = require("express").Router();
const { ctgryColours } = require("../../../controller");

router.get("/", ctgryColours.getColours);
router.post("/", ctgryColours.addColours);
router.patch("/", ctgryColours.editColours);
router.delete("/", ctgryColours.deleteColours);

module.exports = router;
