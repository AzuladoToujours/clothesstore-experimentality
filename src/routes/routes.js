const express = require('express');
const router = express.Router();
const { getProductsService } = require('../services/get-products-service');
const {
  getProductsByNameService,
} = require('../services/get-products-by-name-service');
const {
  getProductByIdService,
} = require('../services/get-product-by-id-service');

router.get('/products', getProductsService);
router.get('/product/search', getProductsByNameService);
router.get('/product/:id', getProductByIdService);

module.exports = router;
