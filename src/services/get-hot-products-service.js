const { getHotProductsDAO } = require('../dao/products/get-hot-products-dao');
const { calculeDiscountPriceProducts } = require('../utils/products-utils');

/**
 * Searchs the hottest products
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */

const getHotProductsService = async (req, res) => {
  const hotProducts = await getHotProductsDAO();

  if (!hotProducts) {
    const DatabaseError = require('../errors/database-error');
    let databaseError = new DatabaseError();
    return res.status(databaseError.statusCode).json(databaseError.errorDto());
  }

  const hotProductsWithDiscount = calculeDiscountPriceProducts(hotProducts);

  return res.status(200).json({
    status: 'Succesful',
    data: hotProductsWithDiscount,
    message: 'GET_HOT_PRODUCTS',
  });
};

module.exports = { getHotProductsService };
