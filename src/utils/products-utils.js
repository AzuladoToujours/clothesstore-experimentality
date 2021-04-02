const {
  restartProductsVisitsDAO,
} = require('../dao/products/restart-products-visits-dao');
const cron = require('node-cron');

/**
 * calculeDiscount in Product and updates the product with the discount
 * @param {Object} product
 * @returns {Object} product
 */

const calculeDiscountPrice = (product) => {
  let { discount, price } = product.dataValues;

  let discountPrice = price - price * (discount / 100);
  product.dataValues.discount_price = discountPrice;
  return product;
};

/**
 * calculeDiscount in Products and updates the products with the discounts
 * @param {Object} products
 * @returns {Object} products
 */

const calculeDiscountPriceProducts = (products) => {
  products.map((product) => {
    let { discount, price } = product.dataValues;
    if (discount !== null) {
      let discountPrice = price - price * (discount / 100);
      product.dataValues.discount_price = discountPrice;
    } else {
      product.dataValues.discount_price = null;
    }
  });
  return products;
};

/**
 * Restarts visits in all products everyday at 12:00AM
 */

const restartProductsVisits = cron.schedule(
  '0 0 0 * * *',
  async () => {
    await restartProductsVisitsDAO();
  },
  {
    scheduled: false,
    timezone: 'America/Bogota',
  }
);

module.exports = {
  calculeDiscountPrice,
  calculeDiscountPriceProducts,
  restartProductsVisits,
};
