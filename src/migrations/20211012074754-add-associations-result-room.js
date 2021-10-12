module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("results", "roomId", {
      type: Sequelize.STRING,
      references: {
        model: "rooms",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      after: "url",
    }),

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn("results", "roomId"),
};
