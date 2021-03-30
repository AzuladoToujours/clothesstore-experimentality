const express = require('express');
const router = express.Router();
const { getProductsService } = require('../services/get-products-service');

router.get('/products', getProductsService);

module.exports = router;
