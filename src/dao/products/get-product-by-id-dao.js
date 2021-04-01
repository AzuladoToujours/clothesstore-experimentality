const models = require('../../database/models');

/**
 * Get one product from DB
 * @param {String} id
 */

const getProductByIdDAO = async (id) => {
  try {
    const product = await models.Products.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    product.visits = product.visits + 1;
    await product.save();

    return product;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  getProductByIdDAO,
};
