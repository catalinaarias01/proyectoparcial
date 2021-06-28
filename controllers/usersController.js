const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const cliente_productos = db.Cliente_productos;
const usuarios = db.Usuarios;
const bcrypt = require('bcryptjs');
const { localsName } = require('ejs');
const { PreconditionFailed } = require('http-errors');


const op = db.Sequelize.Op;

let usersController = {

    register: {
        index: (req, res) =>{
            if(req.session.usuario != undefined){
                return res.redirect('/')
            } else {
                return res.render('register')
            }
        },
        store: (req, res) =>{

            let errors = {};
            
            if(req.body.nombre == ""){ 
                errors.register = "Nombre no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            }else if(req.body.apellido == ""){ 
                errors.register = "Apellido no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')    
            }else if(req.body.email == ""){ 
                errors.register = "Email no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            }else if(req.body.usuario == ""){ 
                errors.register = "Usuario no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')
            }else if(req.body.edad == ""){ 
                errors.register = "Edad no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')
            } else if (req.body.contraseña == ""){ 
                errors.register = "Contraseña no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            } else if (req.body.contraseña.length < 4){ 
                errors.register = "Contraseña debe tener más de 3 caracteres"
                res.locals.errors = errors
    
                return res.render('register')
            }else if(req.body.repetir == ""){ 
                errors.register = "Re escribir contraseña no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            } else {
    
               usuarios.findOne({where: [{ mail : req.body.email}]})
                .then( usuario => {
                    if(usuario !=null){
                        errors.register = "Email ya existe"
                        res.locals.errors = errors
    
                        return res.render('register')
                    } else if(req.body.contraseña != req.body.repetir ) {
                        errors.register = "Las contraseñas no coinciden"
                        res.locals.errors = errors
    
                        return res.render('register')
                    } else {
                        let usuario = {
                            nombre: req.body.nombre,
                            apellido: req.body.apellido,
                            mail: req.body.email,
                            nombre_usuario:req.body.usuario,
                            edad:req.body.edad,
                            contraseña: bcrypt.hashSync(req.body.contraseña, 10),
                            img_usuario: "perfil.jpeg",
                            fecha_nacimiento:req.body.fecha_nacimiento,
                        }
                        console.log(usuario)
                        usuarios.create(usuario)
                            .then( user => {
                                return res.redirect('/users/login')
                                console.log(user)
                            })
                            .catch( err => console.log(err))
                        
                    }
                })
                .catch( err => console.log(err)) 
            }
        }
    },

    login: {
        index: (req, res) =>{
              if(req.session.usuario != undefined){
                return res.redirect('/')
            } else {
                return res.render('login')
            }
            
        },
        logueado: (req,res)=>{
            let errors = {};
        
            usuarios.findOne({
                where: [{mail: req.body.email}]
            })
            .then( (resultado) => {
                if(resultado==null){
                    errors.login = "Email no corresponde a ningún usuario";
                    res.locals.errors = errors;
                    return res.render('login') 
                } else if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña) == false){
                    errors.login = "Contraseña Incorrecta";
                    res.locals.errors = errors;
                    return res.render('login') 
                } else {
                    req.session.usuario = resultado;

                    if(req.body.recordame != undefined){
                        res.cookie('userID', resultado.id, {maxAge: 1000 * 60 * 5});
                    }
                }
                return res.redirect('/');
            })
            .catch( err => console.log(err))     
        },  
        logout:(req,res)=>{
            req.session.destroy()
            res.clearCookie('userId')
    
            return res.redirect('/')
        }
    },


    profile: {
        index: (req, res) =>{
            const  userID = req.params.id

            usuarios.findAll({
            where:[{ id : userID}],
            include:["productosCreados","comentarios","productos"]
            })
            .then(resultado=>{
                    res.render('profile', {usuario:resultado[0], productos:resultado[0].productosCreados, productosLikeados:resultado[0].productos, comentariosUsuario:resultado[0].comentarios});
            })

            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
        },
        edit: (req, res) =>{
            if(req.session.usuario != undefined){
                return res.render('profile-edit')
            } else {
                return res.render('login')
            }
        },
        store: (req,res) =>{
    
            let usuario = {
                id:req.session.usuario.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail:req.body.mail,
                nombre_usuario: req.body.nombre_usuario,                                       
                edad:req.body.edad,
                contraseña:req.body.contraseña.length == 0 ? req.session.usuario.contraseña : bcrypt.hashSync(req.body.contraseña, 10),
                img_usuario:req.file==undefined? req.session.usuario.img_usuario : req.file.filename,
                fecha_nacimiento:req.session.usuario.fecha_nacimiento
            } 
            let errors = {};
            if (req.body.contraseña.length <4 && req.body.contraseña.length > 0) {
                    errors.edit = "La nueva contraseña debe tener más 3 caracteres";
                    res.locals.errors = errors;
                    return res.render('profile-edit') 
            } else if (req.body.contraseña!=req.body.contraseñaRepetida) {
                    errors.edit = "Contraseña y repetir contraseña no coinciden";
                    res.locals.errors = errors;
                    return res.render('profile-edit') 
            }else{

                usuarios.update(
                    {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        mail:req.body.mail,
                        nombre_usuario: req.body.nombre_usuario,                                       
                        edad:req.body.edad,
                        contraseña:req.body.contraseña.length == 0 ? req.session.usuario.contraseña : bcrypt.hashSync(req.body.contraseña, 10),
                        img_usuario:req.file==undefined? req.session.img_usuario : req.file.filename
                    },
                    {
                    where:{id:req.session.usuario.id},
                    },
                    )
                    .then(()=>{
                            req.session.usuario = usuario;
                            res.redirect(`/users/profile/${req.session.usuario.id}`)
                        
                    })
                    .catch(err => console.log(err))
            }
        }
    },
}



module.exports = usersController;

