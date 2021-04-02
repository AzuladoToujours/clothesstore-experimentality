const models = require('../../database/models');

/**
 * Restarts visits in Products
 */

const restartProductsVisitsDAO = async () => {
  try {
    const products = await models.Products.findAll();

    products.map(async (product) => {
      product.visits = 0;
      await product.save();
    });

    return products;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  restartProductsVisitsDAO,
};
