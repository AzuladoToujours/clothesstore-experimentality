const { getProductsDAO } = require('../dao/products/get-products-dao');

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

  const paging = {
    total: products.count,
    limit: limit,
    offset: offset,
  };
  return res.status(200).json({
    status: 'Succesful',
    paging,
    data: products.rows,
    message: 'GET_PRODUCTS',
  });
};

module.exports = { getProductsService };
