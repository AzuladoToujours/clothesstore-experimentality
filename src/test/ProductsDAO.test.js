const { getProductsDAO } = require('../dao/products/get-products-dao');
const {
  getProductsByNameDAO,
} = require('../dao/products/get-producst-by-name-dao');

describe('Test getProducts', () => {
  it('Should get all the products from DB', async () => {
    const products = await getProductsDAO('4', '0');
    expect(products.rows[0].price).toEqual(200452);
  });
});

describe('Test getProductsByName', () => {
  it('Should get all the products that match an accent query from DB', async () => {
    let query = 'blúsÁ';
    const productsByName = await getProductsByNameDAO(query, '2', '0');
    expect(productsByName.rows[0].name).toMatch(/[bB]lusa/);
  });
});
