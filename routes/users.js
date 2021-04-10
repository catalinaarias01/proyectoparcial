var express = require('express');
var router = express.Router();
const app = express()
const usersController = require('../controllers/usersController')
app.use(express.urlencoded({
    extended: true
 }))

/* GET users listing. */
router.get('/', usersController.index);

router.get('/login', usersController.login.index);

router.post('/profile', usersController.profile.index);

router.get('/profile/edit', usersController.profile.edit);

router.get('/register', usersController.register.index);

router.get('/addproducts', usersController.products.add);

module.exports = router;
