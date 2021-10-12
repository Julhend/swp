module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.STRING,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "picture",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("products", "categoryId"),
};
