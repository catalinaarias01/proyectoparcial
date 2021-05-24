var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/product/:id', productController.product);
router.post('/product/:id/addcomment', productController.comment);
router.get('/search', productController.search);
router.get('/addproducts', productController.add);
router.post('/addproducts',productController.store);
router.get('/editproducts/:id', productController.edit);
router.post('/editproducts/:id', productController.update)


module.exports = router;