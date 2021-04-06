var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/:id', productController.index);
router.get('/add', productController.add);

module.exports = router;