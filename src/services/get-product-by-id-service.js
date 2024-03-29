const { getProductByIdDAO } = require('../dao/products/get-product-by-id-dao');
const { calculeDiscountPrice } = require('../utils/products-utils');

/**
 * Searchs product by id
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */

const getProductByIdService = async (req, res) => {
  if (!req.params.id) {
    const PropertyRequiredError = require('../errors/property-required-error');
    let propertyRequired = new PropertyRequiredError();
    propertyRequired.setPropertyAndError('id');
    return res
      .status(propertyRequired.statusCode)
      .json(propertyRequired.errorDto());
  }

  const product = await getProductByIdDAO(req.params.id);

  if (!product) {
    const NotFoundError = require('../errors/not-found-error');
    let notFoundError = new NotFoundError();
    return res.status(notFoundError.statusCode).json(notFoundError.errorDto());
  }

  productByIdWithDiscount = calculeDiscountPrice(product);

  product.visits = undefined;

  return res.status(200).json({
    status: 'Succesful',
    data: productByIdWithDiscount,
    message: 'GET_PRODUCT_BY_ID',
  });
};

module.exports = { getProductByIdService };
