const models = require('../../database/models');

/**
 * Gets products from DB
 * @param {String} limit
 * @param {String} offset
 */

const getProductsDAO = async (limit, offset) => {
  try {
    const products = await models.Products.findAndCountAll({
      limit: limit,
      offset: offset,
    });
    return products;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  getProductsDAO,
};
