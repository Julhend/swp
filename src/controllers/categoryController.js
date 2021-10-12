const httpStatus = require("http-status");
const { createCategory, getAllCattegorr, getAllCategory, updateCategoryById, deleteCategoryById } = require("../services/categoryService");
const catchAsync = require("../utils/catchAsync");
const HOSTNAME = process.env.HOST;

const createNewCategory = catchAsync(async (req, res) => {
  const categoryBody = req.body;
  if (req.file) {
    categoryBody.picture = `${HOSTNAME}/uploads/${req.file.originalname.replaceAll(" ", "%20")}`;
    const category = await createCategory(categoryBody);
    res.sendWrapped(category, httpStatus.CREATED);
  } else {
    const category = await createCategory(categoryBody);
    res.sendWrapped(category, httpStatus.CREATED);
  }
});

const getCategory = catchAsync(async (req, res) => {
  const categoryName = req.query.name;
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }
  let size = 5;
  if (!Number.isNaN(sizeAsNumber) && pageAsNumber > 0 && pageAsNumber < 5) {
    size = sizeAsNumber;
  }

  const offset = page * size;
  if (categoryName) {
    const category = await getAllCategory(categoryName, size, offset);
    res.sendWrapped(category, httpStatus.OK);
  }

  const category = await getAllCattegorr(size, offset);
  res.sendWrapped(category, httpStatus.OK);
});

const updateCategory = catchAsync(async (req, res) => {
  const categoryId = req.query.id;
  const categoryBody = req.body;
  const category = await updateCategoryById(categoryId, categoryBody);
  res.sendWrapped(category, httpStatus.OK);
});

const deleteCategory = catchAsync(async (req, res) => {
  const categoryId = req.query.id;
  const category = await deleteCategoryById(categoryId);
  res.sendWrapped(category, httpStatus.OK);
});

module.exports = {
  createNewCategory,
  getCategory,
  updateCategory,
  deleteCategory
};
