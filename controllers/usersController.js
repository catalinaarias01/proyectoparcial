
//const productos = require('../data/productos');
//const usuarios = require('../data/usuarios');

const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const usuarios = db.Usuarios;
const bcrypt = require('bcryptjs');
const { localsName } = require('ejs');


const op = db.Sequelize.Op;

let usersController = {

    register: {
        index: (req, res) =>{
            res.render('register')
        },
        store: (req, res) =>{
             let usuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail: req.body.email,
                nombre_usuario:req.body.usuario,
                edad:req.body.edad,
                contraseña: bcrypt.hashSync(req.body.contraseña, 10),
                fecha_creación:"2020-06-06 10:55:00",
                img_usuario:""
            } 
            console.log(usuario)
          usuarios.create(usuario)
            .then(user => {
                res.redirect('/users/login')
                console.log(user)
            })
            .catch( error => console.log(error)) 
        },
    },

    login: {
        index: (req, res) =>{
            res.render('login')
        },
        logueado: (req,res)=>{
            const usuario = req.body.usuario
            usuarios.findOne({
                where:[{ nombre_usuario: usuario }]
            })
            .then(resultado => {
                req.session.usuario = resultado
                if (req.body.recordame) {
                    res.cookie("userId",resultado.id,{maxAge:10000*600*10})
                }
                return res.redirect('/users/profile')
            })
            .catch(err=> console.log(err))
        },
        logout:(req,res)=>{
            req.session.destroy()
            res.clearCookie('userId')
    
            return res.redirect('/')
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


    products: {
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
            } 
            console.log(producto)
          productos.create(producto)
            .then(products => {
                res.redirect('/')
                console.log(products)
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

