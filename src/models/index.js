const { User } = require("./User");
const { Role } = require("./Role");
const { Product } = require("./product");
const { Category } = require("./category");

const setupSequelizeAssociations = () => {
  User.belongsTo(Role);
  Role.hasMany(User);
  Product.belongsTo(Category);
  Category.hasMany(Product);
};

module.exports = setupSequelizeAssociations;
