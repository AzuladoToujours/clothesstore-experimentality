const models = require('../../database/models');
const sequelize = require('sequelize');
/**
 * Gets products where the visitis is greater than 5 from DB
 * @param {String} limit
 * @param {String} offset
 * @returns {Object} hotProducts
 */

const getHotProductsDAO = async () => {
  try {
    const products = await models.Products.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'description'] },
      where: {
        visits: {
          [sequelize.Op.gte]: 2,
        },
      },
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
  getHotProductsDAO,
};
