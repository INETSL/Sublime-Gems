const router = require("express").Router();
const { productController } = require("../../controller");
const { uploadProductImages } = require("../../middleware/upload.middleware");

router.get("/", productController.selectProducts);
router.post("/", uploadProductImages, productController.createProduct);
router.patch("/:id", uploadProductImages, productController.updateProductById);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
