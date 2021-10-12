module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [
    {
      id: 'a0a76676-e446-49d2-ab7a-ae622783d7b8',
      roleName: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null),
};
