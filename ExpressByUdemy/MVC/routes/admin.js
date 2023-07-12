const path = require('path');

const express = require('express');

const productController = require('../controller/products');


const router = express.Router();

router.get('/add-product', productController.getAddProduct);

router.post("/add-product", productController.postAddProducts); 

module.exports = router;