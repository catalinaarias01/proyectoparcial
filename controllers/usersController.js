
//const productos = require('../data/productos');
//const usuarios = require('../data/usuarios');

const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const usuarios = db.Usuarios;


const op = db.Sequelize.Op;

let usersController = {

    login: {
        index: (req, res) =>{
            res.render('login')
        },
        logueado: (req,res)=>{
            const usuario = req.body.usuario
            usuarios.findOne({
                where: {
                    nombre_usuario: usuario
                }
            })
            .then(resultado => {
                let usuarioLogueado = req.session.resultado
                return res.redirect('/users/profile')
            })
            .catch(err=> console.log(err))
        }
    },

    profile: {
        index: (req, res) =>{
        
           /* const username = req.body.usuario;*/
            res.render('profile', {productos:productos});
        },
        edit: (req, res) =>{
            res.render('profile-edit')
        },
        
    },

    register: {
    index: (req, res) =>{
        res.render('register')
    }
    },

    products: {
        add: (req, res) =>{
            res.render('product-add')
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
        }
    },

        usersId: {
            index: (req, res) => {    
                const userId = req.params.id;
                usuarios.findByPk(userId)
                    .then(resultadoUsuarios=>{
                        productos.findAll()
                        .then(resultadoProductos=>{
                            res.render('user-profile', {usuario:resultadoUsuarios,  productos:resultadoProductos})
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
                //usuariosConId = usuarios.filter(usuario => usuario.id == userId)
    
        }
    }
}


module.exports = usersController;

