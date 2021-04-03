const request = require('supertest');
const app = require('../app');
const {
  calculeDiscountPrice,
  calculeDiscountPriceProducts,
} = require('../utils/products-utils');

describe('Test Get products', () => {
  it('Should retrieve products with succesful answer', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.paging.limit).toBe('2');
    expect(res.body.paging.offset).toBe('0');
  });
});

describe('Test pagination at Get products', () => {
  it('Should retrieve products with succesful pagination', async () => {
    const res = await request(app).get('/api/products?limit=3&offset=2');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.paging.limit).toBe('3');
    expect(res.body.paging.offset).toBe('2');
    expect(res.body.data[0].name).toMatch(/color/);
    expect(res.body.data[0].images.length).toBeGreaterThan(0);
  });
});

describe('Test Get Products by name', () => {
  it('Should get products with query params succesfully', async () => {
    const res = await request(app).get('/api/products/search?q=flores');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data[0].name).toMatch(/[fF][lL][oO][rR][eE][sS]/);
    expect(res.body.paging.limit).toBe('2');
    expect(res.body.paging.offset).toBe('0');
    expect(res.body.data[0].images.length).toBeGreaterThan(0);
  });
});

describe('Test failed query at Get products by name', () => {
  it('Should return an empty array if the query doesnt match a product in DB', async () => {
    const res = await request(app).get('/api/products/search?q=test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data.length).toBe(0);
  });
});

describe('Test no query param at Get products by name', () => {
  it('Should return an empty array if theres no query in the param', async () => {
    const res = await request(app).get('/api/products/search?');
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toMatch(/NO_QUERY_PROPERTY/);
  });
});

describe('Test pagination at Get Products by name', () => {
  it('Should get products with paginations params succesfully', async () => {
    const res = await request(app).get(
      '/api/products/search?q=blusa&limit=1&offset=0'
    );

    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data[0].name).toMatch(/Blusa/);
    expect(res.body.data[0].images.length).toBeGreaterThan(0);
    expect(res.body.paging.limit).toBe('1');
    expect(res.body.paging.offset).toBe('0');
  });
});

describe('Test getting a product by id', () => {
  it('Should return the products that refers to the id', async () => {
    const res = await request(app).get(
      '/api/product/b4c57282-61f3-4038-a2fb-2dbaa8b681ee'
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.name).toMatch(/[eE]nterizo/);
    expect(res.body.data.images.length).toBeGreaterThan(0);
  });
});

describe('Test calculation of discount on one product', () => {
  it('Should calculate succesfully the discount', () => {
    let product = {
      dataValues: { discount: 50, price: 200452 },
    };
    const productWithDiscount = calculeDiscountPrice(product);
    expect(productWithDiscount.dataValues.discount_price).toBe(100226);
  });
});

describe('Test calculation of discounts on multiple products', () => {
  it('Should calculate succesfully the discount', () => {
    let product = {
      dataValues: { discount: 50, price: 200452 },
    };
    const productsWithDiscount = calculeDiscountPriceProducts([product]);
    expect(productsWithDiscount[0].dataValues.discount_price).toBe(100226);
  });
});

describe('Test fail when getting a product by wrong id', () => {
  it('Should return a 404 and Info not found when the id is wrong', async () => {
    const res = await request(app).get('/api/product/b4c57282-61f3');
    expect(res.statusCode).toEqual(404);
    expect(res.body.status).toMatch(/Failed/);
    expect(res.body.error).toMatch(/INFO_NOT_FOUND/);
  });
});
