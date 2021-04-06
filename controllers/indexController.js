const productos = require('../data/productos');

let indexController = {
    
    index: (req, res) =>{
        res.render('index', {productos:productos})
    },

}

module.exports = indexController;