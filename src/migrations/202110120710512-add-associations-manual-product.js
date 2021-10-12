module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("manuals", "productId", {
      type: Sequelize.STRING,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "file",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("manuals", "productId"),
};
