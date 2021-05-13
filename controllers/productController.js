//const productos = require('../data/productos');
const db = require('../database/models');
const productos = db.Productos;
const op = db.Sequelize.Op;

let productController = {

    index: (req, res) =>{
        productos.findAll()
            .then(resultado=>{
                res.render('index', {productos:resultado})
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
    },
    
    /* product: (req, res) =>{
        const productID = req.params.id;

        const productosConId = productos.filter(producto=>producto.id==productID)
        const respuestaComentarios = productos.filter(producto=>producto.comentariosUsuario)

        res.render('product', {productos:productosConId, comentarios:respuestaComentarios})
    },

    search: (req,res) =>{
        res.render('search-results')
    }, */

}

module.exports = productController;