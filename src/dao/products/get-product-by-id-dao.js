const models = require('../../database/models');

/**
 * Get one product from DB
 * @param {String} id
 * @returns {Object} product
 */

const getProductByIdDAO = async (id) => {
  try {
    const product = await models.Products.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    await product.increment('visits', { by: 1 });

    return product;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  getProductByIdDAO,
};
