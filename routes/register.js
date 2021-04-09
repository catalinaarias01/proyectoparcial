var express = require('express');
const app = express()
var router = express.Router();
const registerController = require('../controllers/registerController')

app.use(express.urlencoded({
    extended: true
  }))


/* GET users listing. */
router.get('/', registerController.index);







module.exports = router;