module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username:'magdalenanario',
      password:'magdalena123',
      mail:'magdalenanario@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'camilagonzalez',
      password:'camila123',
      mail:'camilagonzalez@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'cristobalperez',
      password:'cristobal123',
      mail:'cristobalperez@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { 
      username:'josefinafuentes',
      password:'josefina123',
      mail:'josefinafuentes@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'joseperez',
      password:'jose123',
      mail:'joseperez@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};