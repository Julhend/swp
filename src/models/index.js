const { User } = require("./User");
const { Role } = require("./Role");

const setupSequelizeAssociations = () => {
  User.belongsTo(Role);
  Role.hasMany(User);
};

module.exports = setupSequelizeAssociations;
