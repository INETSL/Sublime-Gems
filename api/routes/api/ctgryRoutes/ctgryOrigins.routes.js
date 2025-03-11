const router = require("express").Router();
const { ctgryOrigins } = require("../../../controller");

router.get("/", ctgryOrigins.getOrigins);
router.post("/", ctgryOrigins.addOrigins);
router.patch("/", ctgryOrigins.editOrigins);
router.delete("/", ctgryOrigins.deleteOrigins);

module.exports = router;
