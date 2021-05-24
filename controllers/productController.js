//const productos = require('../data/productos');
const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const usuarios = db.Usuarios;

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
    
    product: (req, res) =>{
        const productID = req.params.id;
        productos.findByPk(productID)
        .then(resultadoProductos=>{
            comentarios.findByPk(resultadoProductos.comentarios_id)
                .then(resultadoComentarios=>{
                    usuarios.findByPk(resultadoComentarios.usuario_id)
                    .then(resultadoUsuarios=>{

                        res.render('product', {productos:resultadoProductos, comentarios:resultadoComentarios, usuarios:resultadoUsuarios})
                    })
                    .catch(error=>{
                        console.log(error)
                        res.send(`El error es ${error}`)
                    })
                })
                .catch(error=>{
                    console.log(error);
                    res.send(`El error es ${error}`)
                })
                
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })

/*         const productosConId = productos.filter(producto=>producto.id==productID)
        const respuestaComentarios = productos.filter(producto=>producto.comentariosUsuario)

        res.render('product', {productos:productosConId, comentarios:respuestaComentarios}) */
    },

    search: (req,res) =>{
        let searchResults = req.query.search
        productos.findAll({
            where: {
                [op.or]: [
                    {nombre_producto: {[op.like]: `%${searchResults}%`}},
                    {marca: {[op.like]: `%${searchResults}%`}},
                    {descripcion: {[op.like]: `%${searchResults}%`}},
                    {seccion: {[op.like]: `%${searchResults}%`}}
                ]
            }
        })
            .then(resultadoSearch=>{
                res.render('search-results', {productos:resultadoSearch})
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            }) 
            
        /* productos.findAll({where: {
            nombre_producto: {[op.like]: `%${searchResults}%`}
        }})
        .then(resultadoProductos=>{
            productos.findAll({where: {
                marca: {[op.like]: `%${searchResults}%`}
            }})
                .then(resultadoMarcas=>{
                    productos.findAll({where: {
                        descripcion: {[op.like]: `%${searchResults}%`}
                    }})
                    .then(resultadoDescripcion=>{

                        res.render('search-results', {productos:resultadoProductos, marcas:resultadoMarcas, descripcion:resultadoDescripcion})
                    })
                    .catch(error=>{
                        console.log(error)
                        res.send(`El error es ${error}`)
                    })
                })
                .catch(error=>{
                    console.log(error);
                    res.send(`El error es ${error}`)
                })
                
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
         */
    }, 

}

module.exports = productController;
