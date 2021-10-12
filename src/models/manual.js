const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/database");

const Manual = sequelize.define(
  "manual",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = {
  Manual,
};
