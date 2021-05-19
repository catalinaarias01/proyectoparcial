var express = require('express');
var router = express.Router();
const app = express()
const usersController = require('../controllers/usersController')

/*app.use(express.urlencoded({
    extended: true
 }))*/

/* GET users listing. */
/* router.get('/', usersController.index); */

router.get('/login', usersController.login.index);
router.post('/login', usersController.login.logueado);

router.get('/profile', usersController.profile.index);

router.get('/profile/edit', usersController.profile.edit);

router.get('/register', usersController.register.index);
router.post('/register', usersController.register.store);

router.get('/addproducts', usersController.products.add);

router.get('/editproducts/:id', usersController.products.edit);

router.post('/editproducts/:id', usersController.products.update)

router.get('/:id', usersController.usersId.index);

module.exports = router;
