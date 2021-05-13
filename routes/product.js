var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/product/:id', productController.product);
router.get('/search', productController.search);


module.exports = router;