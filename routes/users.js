var express = require('express');
var router = express.Router();
const app = express()
const usersController = require('../controllers/usersController')

router.get('/login', usersController.login.index);
router.post('/login', usersController.login.logueado);
router.post('/logout', usersController.login.logout);
router.get('/profile', usersController.profile.index);
router.get('/profile/edit', usersController.profile.edit);
router.get('/register', usersController.register.index);
router.post('/register', usersController.register.store);
router.get('/:id', usersController.usersId.index);

module.exports = router;
