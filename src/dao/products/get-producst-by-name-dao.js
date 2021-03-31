const models = require('../../database/models');
const sequelize = require('sequelize');

const getProductsByNameDAO = async (query) => {
  try {
    let queryUnaccent = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const productsByName = await models.Products.findAll({
      attributes: ['name', 'price', 'discount'],
      where: {
        name: sequelize.where(sequelize.fn('unaccent', sequelize.col('name')), {
          [sequelize.Op.iLike]: `%${queryUnaccent}%`,
        }),
      },
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
