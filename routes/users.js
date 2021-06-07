var express = require('express');
var router = express.Router();
const app = express()
const usersController = require('../controllers/usersController')

const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
   })
   var upload = multer({ storage: storage });

router.get('/login', usersController.login.index);
router.post('/login', usersController.login.logueado);
router.post('/logout', usersController.login.logout);
router.get('/profile', usersController.profile.index);
router.get('/profile/edit/:id', usersController.profile.edit);
router.post('/profile/edit/:id', upload.single('img_usuario'), usersController.profile.store);
router.get('/register', usersController.register.index);
router.post('/register', usersController.register.store);
router.get('/:id', usersController.usersId.index);


module.exports = router;
