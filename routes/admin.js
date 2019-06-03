const path = require('path');

const express = require('express');
const productsController = require('../controllers/products_controller');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
