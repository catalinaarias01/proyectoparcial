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
            const username = req.body.usuario;
            res.render('profile', {username:username})
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
        
    },


    
}
module.exports = usersController;