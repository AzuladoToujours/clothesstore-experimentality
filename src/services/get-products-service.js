const { getProductsDAO } = require('../dao/products/get-products-dao');
const { calculeDiscountPriceProducts } = require('../utils/products-utils');

/**
 * Searchs all products
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */

const getProductsService = async (req, res) => {
  var offset, limit;

  !req.query.offset ? (offset = '0') : (offset = req.query.offset);
  !req.query.limit ? (limit = '2') : (limit = req.query.limit);

  const products = await getProductsDAO(limit, offset);

  if (!products) {
    const DatabaseError = require('../errors/database-error');
    let databaseError = new DatabaseError();
    return res.status(databaseError.statusCode).json(databaseError.errorDto());
  }

  const productsWithDiscount = calculeDiscountPriceProducts(products.rows);

  const paging = {
    total: products.count / 2,
    limit: limit,
    offset: offset,
  };
  return res.status(200).json({
    status: 'Succesful',
    paging,
    data: productsWithDiscount,
    message: 'GET_PRODUCTS',
  });
};

module.exports = { getProductsService };
