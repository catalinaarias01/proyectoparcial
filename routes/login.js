var express = require('express');
const app = express()
var router = express.Router();
const loginController = require('../controllers/loginController')

app.use(express.urlencoded({
    extended: true
 }))

/* GET users listing. */
router.get('/', loginController.index);

router.post('/profile', loginController.profile.index);

router.get('/profile/edit', loginController.profile.edit);




module.exports = router;