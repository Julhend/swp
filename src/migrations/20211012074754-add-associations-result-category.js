module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("results", "categoryId", {
      type: Sequelize.STRING,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "url",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("results", "categoryId"),
};
