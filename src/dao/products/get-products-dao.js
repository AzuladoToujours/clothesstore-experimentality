const models = require('../../database/models');

const getProductsDAO = async () => {
  try {
    const products = await models.Products.findAll();
    return products;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  getProductsDAO,
};
