const httpStatus = require("http-status");
const { createProduct, getProduct, getProducts, updateProductById, deleteProductById } = require("../services/productService");
const catchAsync = require("../utils/catchAsync");
const HOSTNAME = process.env.HOST;

const createNewProduct = catchAsync(async (req, res) => {
  const productBody = req.body;
  if (req.file) {
    productBody.picture = `${HOSTNAME}/uploads/${req.file.originalname.replaceAll(" ", "%20")}`;
    const product = await createProduct(productBody);
    res.sendWrapped(product, httpStatus.CREATED);
  } else {
    const product = await createProduct(productBody);
    res.sendWrapped(product, httpStatus.CREATED);
  }
});

const getAllProduct = catchAsync(async (req, res) => {
  const productName = req.query.name;
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
  if (productName) {
    const product = await getProduct(productName, size, offset);
    res.sendWrapped(product, httpStatus.OK);
  }

  const product = await getProducts(size, offset);
  res.sendWrapped(product, httpStatus.OK);
});

const updateProduct = catchAsync(async (req, res) => {
  const productId = req.query.id;
  const productBody = req.body;

  if (req.file) {
    console.log(" ini body 1 : " + productBody);
    productBody.picture = `${HOSTNAME}/uploads/${req.file.originalname.replaceAll(" ", "%20")}`;
    const product = await updateProductById(productId, productBody);
    res.sendWrapped(product, httpStatus.OK);
  } else {
    console.log(" ini body 2 : " + productBody);
    const product = await updateProductById(productId, productBody);
    res.sendWrapped(product, httpStatus.OK);
  }

  //   const product = await updateProductById(productId, productBody);
  //   res.sendWrapped(product, httpStatus.OK);
});

const deleteProduct = catchAsync(async (req, res) => {
  const productId = req.query.id;
  await deleteProductById(productId);
  res.sendWrapped("Product delete succesfully", httpStatus.OK);
});

module.exports = {
  createNewProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
