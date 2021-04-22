
const productos = require('../data/productos');
const usuarios = require('../data/usuarios');




let usersController = {


    login: {
        index: (req, res) =>{
            res.render('login')
        },
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
            /* const id = req.params.id;
            let productoFinal = [];

            const checkProductId = () =>{
                return productos.id == id;
            }

            productoFinal = productos.filter(checkProductId) */

            const productID = req.params.id;

                    let respuesta = [];
                    for (let i = 0; i < productos.length; i++) {
                        if (productos[i].id == productID) {
                            respuesta.push(productos[i]);
                        }
                    } 

            res.render('product-edit', {productos:respuesta})

        },
    },

        usersId: {
            index: (req, res) => {    
                
                const userId = req.params.id;

                
                        usuariosConId = usuarios.filter(usuario => usuario.id == userId)
                        
                       /*  let respuesta = [];
                        for (let i = 0; i < usuarios.length; i++) {
                            if (productos[i].id == productID) {
                                respuesta.push(productos[i]);
                            }
                        }  */
    
                res.render('user-profile', {usuario:usuariosConId, productos:productos})}
        }
    }


module.exports = usersController;