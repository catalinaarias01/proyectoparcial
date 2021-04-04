let profileController = {
    
    index: (req, res) =>{
        res.render('profile')
    },

    edit: (req, res) =>{
        res.render('profile-edit')
    },

}

module.exports = profileController;