const calculeDiscountPrice = (product) => {
  let { discount, price } = product.dataValues;

  let discountPrice = price - price * (discount / 100);
  product.dataValues.discount_price = discountPrice;
  return product;
};

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

module.exports = { calculeDiscountPrice, calculeDiscountPriceProducts };
