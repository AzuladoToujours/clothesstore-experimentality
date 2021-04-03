const models = require('../../database/models');
const sequelize = require('sequelize');

/**
 * Gets products defined by a query from DB
 * @param {String} query
 * @param {String} limit
 * @param {String} offset
 * @returns {Object} productsByName
 */

const getProductsByNameDAO = async (query, limit, offset) => {
  try {
    let queryUnaccent = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const productsByName = await models.Products.findAndCountAll({
      attributes: ['id', 'name', 'price', 'discount'],
      where: {
        name: sequelize.where(sequelize.fn('unaccent', sequelize.col('name')), {
          [sequelize.Op.iLike]: `%${queryUnaccent}%`,
        }),
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
      limit: limit,
      offset: offset,
    });
    return productsByName;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = {
  getProductsByNameDAO,
};
