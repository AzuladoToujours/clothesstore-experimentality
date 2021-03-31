const request = require('supertest');
const app = require('../app');

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
    expect(res.body.data[0].name).toMatch(/Blusa/);
  });
});

describe('Test Get Products by name', () => {
  it('Should get products with query params succesfully', async () => {
    const res = await request(app).get('/api/product/search?q=flores');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data[0].name).toMatch(/[fF][lL][oO][rR][eE][sS]/);
    expect(res.body.paging.limit).toBe('2');
    expect(res.body.paging.offset).toBe('0');
  });
});

describe('Test failed query at Get products by name', () => {
  it('Should return an empty array if the query doesnt match a product in DB', async () => {
    const res = await request(app).get('/api/product/search?q=test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data.length).toBe(0);
  });
});

describe('Test no query param at Get products by name', () => {
  it('Should return an empty array if theres no query in the param', async () => {
    const res = await request(app).get('/api/product/search?');
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch(/NO_QUERY/);
  });
});

describe('Test pagination at Get Products by name', () => {
  it('Should get products with paginations params succesfully', async () => {
    const res = await request(app).get(
      '/api/product/search?q=blusa&limit=1&offset=0'
    );

    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toMatch(/Succesful/);
    expect(res.body.data[0].name).toMatch(/Blusa/);
    expect(res.body.paging.limit).toBe('1');
    expect(res.body.paging.offset).toBe('0');
  });
});
