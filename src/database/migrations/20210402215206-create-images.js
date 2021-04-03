'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      product_id: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      uri: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        values: ['FRONT', 'BACK', 'GENERAL'],
        type: Sequelize.ENUM,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Images');
  },
};
