
const express = require('express');

const productController = require('../controller/products');

const router = express.Router();

router.use('/success', productController.success);

module.exports = router;