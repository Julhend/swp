module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("manuals", "categoryId", {
      type: Sequelize.STRING,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "file",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("manuals", "categoryId"),
};
