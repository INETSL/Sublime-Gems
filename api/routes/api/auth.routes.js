const router = require("express").Router();
const { authController } = require("../../controller");
const authenticate = require("../../middleware/authMiddleware");
const authorizeRoles = require("../../middleware/authorizeRole.middleware");

router.post("/register", authController.createUser);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.get(
  "/",
  authenticate,
  authorizeRoles("admin"),
  authController.getAllUsers
);
router.get("/:id", authenticate, authController.getUserById);
router.patch("/:id", authenticate, authController.updateUser);
router.delete("/:id", authenticate, authController.deleteUser);

module.exports = router;
