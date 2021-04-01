const calculeDiscountPrice = (price, discount) => {
  let discountPrice = price - price * (discount / 100);
  return discountPrice;
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
