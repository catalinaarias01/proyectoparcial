
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

            const productID = req.params.id;
            const productosConId = productos.filter(producto=>producto.id==productID)

            res.render('product-edit', {productos:productosConId})

        },
    },

        usersId: {
            index: (req, res) => {    
                
                const userId = req.params.id;
                usuariosConId = usuarios.filter(usuario => usuario.id == userId)
    
                res.render('user-profile', {usuario:usuariosConId, productos:productos})}
        }
    }


module.exports = usersController;