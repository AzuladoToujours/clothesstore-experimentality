'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Blusa color sólido manga larga',
        description: 'Blusa manga larga',
        price: 200425,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pantalón silueta skinny color sólido',
        description: 'Pantalón silueta',
        price: 200452,
        discount: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Enterizo estampado flores tropical',
        description: 'Enterizo con flores',
        price: 200452,
        discount: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blusa asimétrica escote profundo',
        description: 'Blusa con escote',
        price: 200452,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', [
      {
        name: 'Blusa color sólido manga larga',
      },
      {
        name: 'Pantalón silueta skinny color sólido',
      },
      {
        name: 'Enterizo estampado flores tropical',
      },
      {
        name: 'Blusa asimétrica escote profundo',
      },
    ]);
  },
};
