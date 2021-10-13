const httpStatus = require("http-status");
const { Category } = require("../models/category");
const ApiError = require("../utils/ApiError");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Product } = require("../models/category");

const createCategory = async (categoryBody) => {
  const category = await Category.findOne({
    where: {
      name: categoryBody.name,
    },
  });

  if (category && category.name === categoryBody.name) throw new ApiError(httpStatus.CONFLICT, "Category with name " + `${categoryBody.name}` + " already created.");

  return Category.create(categoryBody);
};

const getCategoryById = async (categoryId, { opts = {} } = {}) => {
  const category = await Category.findOne({
    where: {
      id: categoryId,
    },
    ...opts,
  });
  if (!category) throw new ApiError(httpStatus.NOT_FOUND, "Category not found.");
  return category;
};

const getAllCategory = async (categoryName, categorySize, categoryOffset) => {
  const category = await Category.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${categoryName}%`,
      },
    },
    limit: categorySize,
    offset: categoryOffset,
    order: ["name"],
  });
  if (!category) throw new ApiError(httpStatus.NOT_FOUND, "Category not found.");
  return category;
};

const getAllCattegorr = async (categorySize, categoryOffset) => {
  const category = await Category.findAndCountAll({
    limit: categorySize,
    offset: categoryOffset,
    order: ["name"],
  });
  if (!category) throw new ApiError(httpStatus.NOT_FOUND, "Category not found.");
  return category;
};

const updateCategoryById = async (categoryId, categoryBody) => {
  const category = await getCategoryById(categoryId);
  Object.assign(category, categoryBody);
  await category.save();
  return category;
};

const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  await category.destroy();
  return category;
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getAllCategory,
  getAllCattegorr,
};
