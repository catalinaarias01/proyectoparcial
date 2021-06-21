//const productos = require('../data/productos');
const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const usuarios = db.Usuarios;
const cliente_productos = db.Cliente_productos;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(/*database*/'proyectoparcial', /*username*/'root', /*password*/'root',
    {host: 'localhost', dialect: 'mysql'});

const op = db.Sequelize.Op;

let productController = {

    index: (req, res) =>{
        productos.findAll({include:["usuarioCreadores","comentarios"],order:[["created_at","desc"]]})
            .then(resultado=>{
                productos.findAll({
                    attributes: {
                        include:[
                            [
                                sequelize.literal(`(
                                    SELECT COUNT(*)
                                    FROM Comentarios AS comentarios
                                    WHERE
                                        comentarios.producto_id = productos.id
                                )`),
                                'comentariosCount'
                            ]
                        ]
                    },
                    order:[
                        [sequelize.literal('comentariosCount'),'DESC']
                    ]
                })
                .then(masComentados=>{
                    res.render('index', {productos:resultado, productosComentados:masComentados})
                })
            })
            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })},
    

    product: (req, res) =>{
        const productId = req.params.id;
        productos.findByPk(productId,{
            include:["comentarios","usuarioCreadores","usuarios"],
            order:[["comentarios",'created_at','desc']],
            //order: [[comentarios, 'created_at', 'desc']],
            
        })
        .then(resultado=>{
            usuarios.findAll()
            .then(usuarios=>{
              res.render("product",{productos:resultado, usuarios:usuarios, usuariosLike:resultado.usuarios})
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
            }, include:["usuarioCreadores","comentarios"]
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
            if(req.session.usuario != undefined){
                return res.render('product-add')
            } else {
                return res.redirect('/')
            }

        },
        store: (req, res) =>{
            let producto = {
                nombre_producto: req.body.nombre,
                descripcion: req.body.descripcion,
                seccion: req.body.seccion,
                marca:req.body.marca,
                img_url:req.file.filename,
                usuario_id: req.session.usuario.id,
                comentarios_id: null
            };

            
            productos.create(producto)
            .then(resultado => {
                    res.redirect("/")
                })

            .catch( error => console.log(error)) 
        },
        edit: (req, res) =>{
            const productID = req.params.id;
            if(req.session.usuario != undefined){
                productos.findByPk(productID)
                .then(resultadoProductos=>{
                    if(resultadoProductos.usuario_id==req.session.usuario.id){
                    res.render('product-edit', {productos:resultadoProductos})
                    }else{
                    res.redirect(`/product/${productID}`)
                    }
                })
                .catch(error=>{
                    console.log(error);
                    res.send(`El error es ${error}`)
                })
            } else {
                return res.redirect(`/product/${productID}`)
            }
            //const productosConId = productos.filter(producto=>producto.id==productID)

            //res.render('product-edit', {productos:productosConId})
        },
        update: (req, res)=>{   
            
            let productID = req.params.id;
            let productoActualizar = req.body
            productos.update(
                {
                    nombre_producto: productoActualizar.nombre_producto,
                    descripcion: productoActualizar.descripcion,
                    seccion: productoActualizar.seccion,
                    marca: productoActualizar.marca,
                    img_url: req.file == undefined ? productos.img_url : req.file.filename
                }, 
                {
                    where: {
                        id: productID
                    }
                }
            )
                .then(()=> res.redirect(`/product/${productID}`))
                .catch(err => console.log(err))
        },
        eliminar: (req, res) =>{
            let productID = req.params.id;
            productos.findByPk(productID)
            .then(resultado=>{
                if(resultado.usuario_id != req.session.usuario.id){
                    res.redirect(`/product/${productID}`)
                }else{
                cliente_productos.destroy({where:{producto_id:productID}})
                .then(()=> {
                    comentarios.destroy({where:{producto_id:productID}})
                    .then(()=>{
                        productos.destroy({where: {id: productID}})
                        return res.redirect('/') 
                    })
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            }
            
          })  
          .catch(err => console.log(err))
            
        },
        comment: (req,res) =>{
       
            if(req.session.usuario != undefined){
                const productoId = req.params.id;
            const comentario = {
                texto:req.body.text,
                producto_id:productoId,
                usuario_id:req.session.usuario.id,
            }
            comentarios.create(comentario)
            .then(comentarios => {
             return res.redirect(`/product/${productoId}`)

            })
            .catch( error => console.log(error)) 
        
            } else {
                 return res.render('login')
            }
        },
        seccion:(req,res)=>{
            const seccionParam = req.params.seccion;
            productos.findAll({
                where:[{seccion:seccionParam}]
            }) 
            .then(resultado=>{
                res.render("product-secciones",{productos:resultado})
            })
        },
        like:(req,res) =>{
            const productId = req.params.id;
            const producto_likeado = {
                producto_id:productId,
                usuario_id:req.session.usuario.id,
            }
            cliente_productos.create(producto_likeado)
            .then(resultado=>{
                res.redirect(`/product/${productId}`)
            })
        },
        unlike:(req,res) =>{
            const productId = req.params.id;

            cliente_productos.destroy({where:{producto_id:productId, usuario_id:req.session.usuario.id}})

            .then(resultado=>{
                res.redirect(`/product/${productId}`)
            })
        }
    }


module.exports = productController;
