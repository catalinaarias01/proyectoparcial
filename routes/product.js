var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, './public/images/products')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
    })
    var upload = multer({ storage: storage });

router.get('/', productController.index);
router.get('/product/:id', productController.product);
router.post('/product/:id/addcomment', productController.comment);
router.get('/search', productController.search);
router.get('/addproducts', productController.add);
router.post('/addproducts', upload.single('img_url'), productController.store);
router.get('/editproducts/:id', productController.edit);
router.post('/editproducts/:id',upload.single('img_url'), productController.update)


module.exports = router;