
const productos = require('../data/productos');

let indexController = {
    
    index: (req, res) =>{
        res.render('index', {productos:productos})
    },

}

module.exports = indexController;

let usersController = {

/*     index: (req, res) =>{
        res.render('index')
    }, */

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


    
}
module.exports = usersController;