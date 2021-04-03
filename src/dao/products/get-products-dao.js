const models = require('../../database/models');
const sequelize = require('sequelize');

/**
 * Gets products from DB
 * @param {String} limit
 * @param {String} offset
 * @returns {Object} products
 */

const getProductsDAO = async (limit, offset) => {
  try {
    const products = await models.Products.findAndCountAll({
      attributes: {
        exclude: ['visits', 'createdAt', 'updatedAt'],
      },
      limit: limit,
      offset: offset,
      include: [
        {
          model: models.Images,
          as: 'images',
          required: true,
          where: {
            [sequelize.Op.or]: [{ type: 'FRONT' }, { type: 'BACK' }],
          },
          attributes: ['uri', 'type'],
        },
      ],
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
