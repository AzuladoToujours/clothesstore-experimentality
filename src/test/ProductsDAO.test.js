const { getProductsDAO } = require('../dao/products/get-products-dao');
const {
  getProductsByNameDAO,
} = require('../dao/products/get-producst-by-name-dao');

describe('Test getProducts', () => {
  it('Should get value from Seeders', async () => {
    const products = await getProductsDAO();
    expect(products[0].price).toEqual(200452);
  });
});

describe('Test getProductsByName', () => {
  it('Should get value from search', async () => {
    let query = 'blúsÁ';
    const productsByName = await getProductsByNameDAO(query);
    expect(productsByName[0].name).toMatch(/[bB]lusa/);
  });
});
