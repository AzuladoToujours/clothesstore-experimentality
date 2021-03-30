const { getProductsDAO } = require('../dao/products/get-products-dao');

describe('Test get Products', () => {
  it('Should get value from Seeders', async () => {
    const products = await getProductsDAO();
    expect(products[0].name).toEqual('');
  });
});
