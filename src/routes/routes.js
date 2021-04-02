const express = require('express');
const router = express.Router();
const { getProductsService } = require('../services/get-products-service');
const {
  getProductsByNameService,
} = require('../services/get-products-by-name-service');
const {
  getProductByIdService,
} = require('../services/get-product-by-id-service');
const {
  getHotProductsService,
} = require('../services/get-hot-products-service');
const {
  restartProductsVisitsService,
} = require('../services/restart-products-service');

router.get('/products', getProductsService);
router.get('/products/search', getProductsByNameService);
router.get('/product/:id', getProductByIdService);
router.get('/products/hot', getHotProductsService);
router.get('/products/restart', restartProductsVisitsService);

module.exports = router;
