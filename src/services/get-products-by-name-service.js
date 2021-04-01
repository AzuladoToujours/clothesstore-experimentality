const {
  getProductsByNameDAO,
} = require('../dao/products/get-producst-by-name-dao');
const { calculeDiscountPriceProducts } = require('../utils/products-utils');

/**
 * Searchs products by a defined query
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */
const getProductsByNameService = async (req, res) => {
  if (!req.query.q) {
    return res.status(400).json({
      status: 'Failed',
      message: 'NO_QUERY',
    });
  } else {
    let offset, limit;

    !req.query.offset ? (offset = '0') : (offset = req.query.offset);
    !req.query.limit ? (limit = '2') : (limit = req.query.limit);
    const query = req.query.q;
    const productsByName = await getProductsByNameDAO(query, limit, offset);
    let productsByNameWithDiscount = calculeDiscountPriceProducts(
      productsByName.rows
    );
    const paging = {
      total: productsByName.count,
      limit: limit,
      offset: offset,
    };
    return res.status(200).json({
      status: 'Succesful',
      paging,
      data: productsByNameWithDiscount,
      message: 'GET_PRODUCTS_BY_NAME',
    });
  }
};

module.exports = { getProductsByNameService };
