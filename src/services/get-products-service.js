const { getProductsDAO } = require('../dao/products/get-products-dao');

const getProductsService = async (req, res) => {
  const products = await getProductsDAO();
  return res.status(200).json({
    status: 'Succesful',
    data: products,
    message: 'GET_PRODUCTS',
  });
};

module.exports = { getProductsService };
