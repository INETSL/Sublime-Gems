const router = require("express").Router();
const { ctgrySelections } = require("../../../controller");

router.get("/", ctgrySelections.getSelections);
router.post("/", ctgrySelections.addSelections);
router.patch("/", ctgrySelections.editSelections);
router.delete("/", ctgrySelections.deleteSelections);

module.exports = router;
