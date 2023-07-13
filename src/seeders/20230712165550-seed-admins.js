module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username:'admin',
      password:'admin123',
      mail:'admin@example.com',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};