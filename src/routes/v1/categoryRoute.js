const express = require("express");
const categoryController = require("../../controllers/categoryController");
const auth = require("../../middlewares/auth");
const { upload } = require("../../controllers/fileController");

const router = express.Router();

router.post("/", auth, upload.single("picture"), categoryController.createNewCategory);
router.get("/", categoryController.getCategory);
router.patch("/", auth, categoryController.updateCategory);
router.delete("/", auth, categoryController.deleteCategory);

module.exports = router;
