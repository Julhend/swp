const httpStatus = require("http-status");
const { Product } = require("../models/product");
const ApiError = require("../utils/ApiError");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Category } = require("../models/category");

const createProduct = async (productBody) => {
  const product = await Product.create(productBody);
  return product;
};

const getProductById = async (productId, { opts = {} } = {}) => {
  const product = await Product.findOne({
    where: {
      id: productId,
    },
    ...opts,
  });
  if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
  return product;
};

const getProduct = async (productName, productSize, productOffset) => {
  const product = await Product.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${productName}%`,
      },
    },
    limit: productSize,
    offset: productOffset,
    order: ["name"],
    include: [{ model: Category }],
  });
  if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  return product;
};

const getProducts = async (productSize, productOffset) => {
  const product = await Product.findAndCountAll({
    limit: productSize,
    offset: productOffset,
    order: ["name"],
    include: [{ model: Category }],
  });
  if (!product) throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  return product;
};

const updateProductById = async (productId, productBody) => {
  const product = await getProductById(productId);
  // JSON.parse(productBody);
  Object.assign(product, productBody);
  await product.save();
  return product;
};

const deleteProductById = async (productId) => {
  const product = await getProductById(productId);
  await product.destroy();
  return product;
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProductById,
  deleteProductById,
};
