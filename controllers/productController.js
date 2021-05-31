//const productos = require('../data/productos');
const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const usuarios = db.Usuarios;
const cliente_productos = db.Cliente_productos;

const op = db.Sequelize.Op;

let productController = {

    index: (req, res) =>{
        productos.findAll({include:[{association:"usuarioCreadores"},{association:"comentarios"}]})
            .then(productos=>{
                res.render('index', {productos:productos})
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
    },
    

    product: (req, res) =>{
        const productId = req.params.id;
        productos.findByPk(productId,{
            include:[
                {
                    association:"comentarios",
                     /* include:[
                        {
                            association:"usuarios",
                        }
                    ]  */
                },
                {
                    association:"usuarioCreadores"
                }]
            
        })
        .then(resultado=>{
            usuarios.findAll()
            .then(usuarios=>{

                res.render("product",{productos:resultado, usuarios:usuarios})
            })
        })
        /*const productID = req.params.id;
        cliente_productos.findAll({
            where:[{producto_id:productID}]
        })
        .then(resultadoUsuarioProducto=>{
            const usuarioProducto = resultadoUsuarioProducto[0];

            usuarios.findByPk(usuarioProducto.usuario_id)
        .then(resultadoUsuarioProducto =>{

                productos.findByPk(productID)
                .then(resultadoProductos=>{
                    comentarios.findAll({
                        where:[{producto_id:resultadoProductos.id}],
                         include:[{
                            model:usuarios,
                        }] 
                    })
                        .then(resultadoComentarios=>{
                            console.log(resultadoComentarios[0].Usuario)
                                usuarios.findAll()
                                .then(resultadoUsuarios=>{
                                    res.render('product', {productos:resultadoProductos, comentarios:resultadoComentarios,  usuarioProducto:resultadoUsuarioProducto, usuariosComentan:resultadoUsuarios})
                                })
                        })
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

        add: (req, res) =>{
            res.render('product-add')
        },
        store: (req, res) =>{
            let producto = {
                nombre_producto: req.body.nombre,
                descripcion: req.body.descripcion,
                seccion: req.body.seccion,
                marca:req.body.marca,
                img_url:req.body.img,
                fecha_creacion: "2020-06-06 10:55:00",
                usuario_id: req.session.usuario.id,
                comentarios_id: null
            };

            
            productos.create(producto)
            .then(products => {
                let cliente_producto = {
                    producto_id:products.id,
                    usuario_id:req.session.usuario.id,
                }
                cliente_productos.create(cliente_producto)
                .then(resultado=>{
                    res.redirect('/')
                })
                .catch( error => console.log(error)) 
            })
            .catch( error => console.log(error)) 
        },
        edit: (req, res) =>{
            const productID = req.params.id;
            productos.findByPk(productID)
            .then(resultadoProductos=>{
                res.render('product-edit', {productos:resultadoProductos})
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
            //const productosConId = productos.filter(producto=>producto.id==productID)

            //res.render('product-edit', {productos:productosConId})
        },
        update: (req, res)=>{   
            let productID = req.params.id;
            let productoActualizar = req.body
            productos.update(
                productoActualizar, 
                {
                    where: {
                        id: productID
                    }
                }
            )
                .then(()=> res.redirect(`/product/${productID}`))
                .catch(err => console.log(err))
        },
        comment: (req,res) =>{
            const productoId = req.params.id;
            const comentario = {
                texto:req.body.text,
                producto_id:productoId,
                usuario_id:req.session.usuario.id,
            }
            comentarios.create(comentario)
            .then(comentarios => {
                res.redirect(`/product/${productoId}`)

            })
            .catch( error => console.log(error)) 
        }
    }


module.exports = productController;
