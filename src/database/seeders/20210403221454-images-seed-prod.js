'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        product_id: '8163d5a3-2145-4946-898b-90390fb0d846',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/8163d5a3-2145-4946-898b-90390fb0d846/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '8163d5a3-2145-4946-898b-90390fb0d846',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/8163d5a3-2145-4946-898b-90390fb0d846/BACK.png',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '8163d5a3-2145-4946-898b-90390fb0d846',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/8163d5a3-2145-4946-898b-90390fb0d846/GENERAL1.png',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3554dd7a-4af1-4650-b22c-d9fe76914d13',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/3554dd7a-4af1-4650-b22c-d9fe76914d13/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3554dd7a-4af1-4650-b22c-d9fe76914d13',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/3554dd7a-4af1-4650-b22c-d9fe76914d13/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3554dd7a-4af1-4650-b22c-d9fe76914d13',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/3554dd7a-4af1-4650-b22c-d9fe76914d13/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bffddb75-4196-4290-ae4f-85f1a14948d1',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/bffddb75-4196-4290-ae4f-85f1a14948d1/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bffddb75-4196-4290-ae4f-85f1a14948d1',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/bffddb75-4196-4290-ae4f-85f1a14948d1/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bffddb75-4196-4290-ae4f-85f1a14948d1',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/bffddb75-4196-4290-ae4f-85f1a14948d1/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'bffddb75-4196-4290-ae4f-85f1a14948d1',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/bffddb75-4196-4290-ae4f-85f1a14948d1/GENERAL2.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e/FRONT.jpeg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e/BACK.jpeg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e',
        uri:
          'https://clothes-store-expe.s3.amazonaws.com/ec13ccb2-bbf3-49ee-afcc-2b9bdff4821e/GENERAL1.jpeg',
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
