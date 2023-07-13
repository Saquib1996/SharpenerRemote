

const express = require('express');

const productController = require('../controller/products');


const router = express.Router();

router.get('/contactus',productController.contact); 

module.exports = router;