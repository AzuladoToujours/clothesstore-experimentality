'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        product_id: '5cc821cb-bf82-4104-87d9-720ae06c5a2a',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/5cc821cb-bf82-4104-87d9-720ae06c5a2a/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '5cc821cb-bf82-4104-87d9-720ae06c5a2a',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/5cc821cb-bf82-4104-87d9-720ae06c5a2a/BACK.png',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '5cc821cb-bf82-4104-87d9-720ae06c5a2a',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/5cc821cb-bf82-4104-87d9-720ae06c5a2a/GENERAL1.png',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'b4c57282-61f3-4038-a2fb-2dbaa8b681ee',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/b4c57282-61f3-4038-a2fb-2dbaa8b681ee/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'b4c57282-61f3-4038-a2fb-2dbaa8b681ee',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/b4c57282-61f3-4038-a2fb-2dbaa8b681ee/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 'b4c57282-61f3-4038-a2fb-2dbaa8b681ee',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/b4c57282-61f3-4038-a2fb-2dbaa8b681ee/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3150bde4-bf9f-4135-9f26-e712164a60a6',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/3150bde4-bf9f-4135-9f26-e712164a60a6/FRONT.jpg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3150bde4-bf9f-4135-9f26-e712164a60a6',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/3150bde4-bf9f-4135-9f26-e712164a60a6/BACK.jpg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3150bde4-bf9f-4135-9f26-e712164a60a6',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/3150bde4-bf9f-4135-9f26-e712164a60a6/GENERAL1.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '3150bde4-bf9f-4135-9f26-e712164a60a6',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/3150bde4-bf9f-4135-9f26-e712164a60a6/GENERAL2.jpg',
        type: 'GENERAL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '399925fe-3a8a-4dc4-99b4-ce76dce32001',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/399925fe-3a8a-4dc4-99b4-ce76dce32001/FRONT.jpeg',
        type: 'FRONT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '399925fe-3a8a-4dc4-99b4-ce76dce32001',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/399925fe-3a8a-4dc4-99b4-ce76dce32001/BACK.jpeg',
        type: 'BACK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: '399925fe-3a8a-4dc4-99b4-ce76dce32001',
        uri:
          'https://clothes-store-test.s3.amazonaws.com/399925fe-3a8a-4dc4-99b4-ce76dce32001/GENERAL1.jpeg',
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
