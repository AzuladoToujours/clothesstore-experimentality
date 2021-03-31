const {
  getProductsByNameDAO,
} = require('../dao/products/get-producst-by-name-dao');
const { calculeDiscountPriceProducts } = require('../utils/products-utils');

const getProductsByNameService = async (req, res) => {
  if (!req.query.q) {
    return res.status(204).json({
      status: 'Succesful',
      data: [],
      message: 'NO_QUERY',
    });
  } else {
    const query = req.query.q;
    const productsByName = await getProductsByNameDAO(query);
    let productsByNameWithDiscount = calculeDiscountPriceProducts(
      productsByName
    );
    return res.status(200).json({
      status: 'Succesful',
      data: productsByNameWithDiscount,
      message: 'GET_PRODUCTS_BY_NAME',
    });
  }
};

module.exports = { getProductsByNameService };
