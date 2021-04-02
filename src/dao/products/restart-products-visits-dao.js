const models = require('../../database/models');
const sequelize = require('sequelize');
/**
 * Restarts visits in Products
 */

const restartProductsVisitsDAO = async () => {
  try {
    const products = await models.Products.findAll({
      where: {
        visits: {
          [sequelize.Op.gt]: 0,
        },
      },
    });

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
