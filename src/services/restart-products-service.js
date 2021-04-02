const {
  restartProductsVisitsDAO,
} = require('../dao/products/restart-products-visits-dao');

/**
 * Restart all the visits in the products
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */

const restartProductsVisitsService = async (req, res) => {
  const products = await restartProductsVisitsDAO();

  if (!products) {
    const DatabaseError = require('../errors/database-error');
    let databaseError = new DatabaseError();
    return res.status(databaseError.statusCode).json(databaseError.errorDto());
  }

  return res.status(200).json({
    status: 'Succesful',
    data: products,
    message: 'RESTART_PRODUCTS_VISITS',
  });
};

module.exports = { restartProductsVisitsService };
