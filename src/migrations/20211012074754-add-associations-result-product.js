module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("results", "productId", {
      type: Sequelize.STRING,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "url",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("results", "productId"),
};
