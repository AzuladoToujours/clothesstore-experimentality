const models = require('../../database/models');

const createProductDAO = async (product) => {
  try {
    const createdProduct = await models.Products.create(product);

    return createdProduct;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = { createProductDAO };
