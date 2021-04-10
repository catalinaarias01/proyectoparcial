const productos = require('../data/productos');

let productController = {
    
    index: (req, res) =>{
        const productID = req.params.id;
 
 /*            productos.filter(producto =>{
                producto.id === productID
            }); */

            let respuesta = [];
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id == productID) {
                    respuesta.push(productos[i]);
                }
            } 

        res.render('product', {productos:respuesta})
    },


}

module.exports = productController;