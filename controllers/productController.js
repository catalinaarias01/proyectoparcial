const productos = require('../data/productos');

let productController = {
    
    index: (req, res) =>{
        const productID = req.params.id;
 
 /*            productos.filter(producto =>{
                producto.id === productID
            }); */

            let respuesta = [];
            let respuestaComentarios = [];
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id == productID) {
                    respuesta.push(productos[i]);
                    respuestaComentarios.push(productos[i].comentariosUsuario)
                }
            } 
        res.render('product', {productos:respuesta, comentarios:respuestaComentarios})
    },


}

module.exports = productController;