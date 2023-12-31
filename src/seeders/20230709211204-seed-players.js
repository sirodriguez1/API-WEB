module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Players', [
    {
      name:'Bart',
      position:0,
      color:'red',
      userId: 1,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Lisa',
      position:0,
      color:'blue',
      userId: 2,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Homer',
      position:0,
      color:'yellow',
      userId: 3,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Marge',
      position:0,
      color:'green',
      userId: 4,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Maggie',
      position:0,
      color:'purple',
      userId: 5,
      gameId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Players', null, {}),
};