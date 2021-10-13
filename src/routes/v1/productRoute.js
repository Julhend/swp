const express = require("express");
const productController = require("../../controllers/productController");
const auth = require("../../middlewares/auth");
const { upload } = require("../../controllers/fileController");

const router = express.Router();

router.post("/", auth, upload.single("picture"), productController.createNewProduct);
router.get("/", productController.getAllProduct);
router.patch("/", auth, productController.updateProduct);
router.delete("/", auth, productController.deleteProduct);

module.exports = router;
