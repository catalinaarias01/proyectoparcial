const productos = require('../data/productos');

let productController = {

    index: (req, res) =>{
        res.render('index', {productos:productos})
    },
    
    product: (req, res) =>{
        const productID = req.params.id;

        const productosConId = productos.filter(producto=>producto.id==productID)
        const respuestaComentarios = productos.filter(producto=>producto.comentariosUsuario)

        res.render('product', {productos:productosConId, comentarios:respuestaComentarios})
    },

    search: (req,res) =>{
        res.render('search-results')
    },

}

module.exports = productController;