module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("results", "variantId", {
      type: Sequelize.STRING,
      references: {
        model: "variants",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "url",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("results", "variantId"),
};
