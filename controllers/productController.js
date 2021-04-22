const productos = require('../data/productos');

let productController = {
    
    index: (req, res) =>{
        const productID = req.params.id;

        const productosConId = productos.filter(producto=>producto.id==productID)
        const respuestaComentarios = productos.filter(producto=>producto.comentariosUsuario)

        res.render('product', {productos:productosConId, comentarios:respuestaComentarios})
    },


}

module.exports = productController;