const express = require('express');
const router = express.Router();
const { getProductsService } = require('../services/get-products-service');
const {
  getProductsByNameService,
} = require('../services/get-products-by-name-service');

router.get('/products', getProductsService);
router.get('/product/search', getProductsByNameService);

module.exports = router;
