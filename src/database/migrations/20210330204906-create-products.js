'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(async () => {
        await queryInterface.createTable('Products', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          description: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          price: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          discount: {
            type: Sequelize.INTEGER,
          },
          visits: {
            allowNull: false,
            defaultValue: 0,
            type: Sequelize.INTEGER,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
