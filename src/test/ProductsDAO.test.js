const { getProductsDAO } = require('../dao/products/get-products-dao');
const {
  getProductsByNameDAO,
} = require('../dao/products/get-producst-by-name-dao');
const { getProductByIdDAO } = require('../dao/products/get-product-by-id-dao');
const {
  restartProductsVisitsDAO,
} = require('../dao/products/restart-products-visits-dao');

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

describe('Test getProductsById and visits counter', () => {
  it('Should get an specific product from db and augment his visits counter', async () => {
    let id = 'b4c57282-61f3-4038-a2fb-2dbaa8b681ee';
    const productById = await getProductByIdDAO(id);
    let expectedVisits = productById._previousDataValues.visits + 1;
    expect(productById.name).toMatch(/[eE]nterizo/);
    expect(productById.dataValues.visits).toEqual(expectedVisits);
  });
});

describe('Test restartProductsVisits counter', () => {
  it('Should restart the visits at 0 in all the products', async () => {
    const productsByName = await restartProductsVisitsDAO();
    expect(productsByName[0].visits).toBe(0);
  });
});
