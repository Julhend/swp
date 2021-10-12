module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("variants", "productId", {
      type: Sequelize.STRING,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "picture",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("variants", "productId"),
};
