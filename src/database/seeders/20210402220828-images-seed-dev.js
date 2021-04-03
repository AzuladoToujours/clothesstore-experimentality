'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        product_id: '9413495d-6be8-4cfb-91d6-71ded0db5ee3',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/9413495d-6be8-4cfb-91d6-71ded0db5ee3/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '9413495d-6be8-4cfb-91d6-71ded0db5ee3',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/9413495d-6be8-4cfb-91d6-71ded0db5ee3/BACK.png',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '9413495d-6be8-4cfb-91d6-71ded0db5ee3',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/9413495d-6be8-4cfb-91d6-71ded0db5ee3/GENERAL1.png',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bb6da221-3984-485a-be53-8eb34171063e',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/bb6da221-3984-485a-be53-8eb34171063e/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bb6da221-3984-485a-be53-8eb34171063e',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/bb6da221-3984-485a-be53-8eb34171063e/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bb6da221-3984-485a-be53-8eb34171063e',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/bb6da221-3984-485a-be53-8eb34171063e/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'cb57f664-4396-43ba-9686-b1cc90494ca9',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/cb57f664-4396-43ba-9686-b1cc90494ca9/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'cb57f664-4396-43ba-9686-b1cc90494ca9',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/cb57f664-4396-43ba-9686-b1cc90494ca9/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'cb57f664-4396-43ba-9686-b1cc90494ca9',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/cb57f664-4396-43ba-9686-b1cc90494ca9/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'cb57f664-4396-43ba-9686-b1cc90494ca9',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/cb57f664-4396-43ba-9686-b1cc90494ca9/GENERAL2.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'e17ced87-bf11-472e-8861-cfd3d0092242',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/e17ced87-bf11-472e-8861-cfd3d0092242/FRONT.jpeg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'e17ced87-bf11-472e-8861-cfd3d0092242',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/e17ced87-bf11-472e-8861-cfd3d0092242/BACK.jpeg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'e17ced87-bf11-472e-8861-cfd3d0092242',
        uri:
          'https://clothes-store-dev.s3.amazonaws.com/e17ced87-bf11-472e-8861-cfd3d0092242/GENERAL1.jpeg',
        type: 'GENERAL',
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
  },
};
