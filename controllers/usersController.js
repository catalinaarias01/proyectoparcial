
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
            // Control de acceso
            //if(req.session.user != undefined){
              //  return res.redirect('/')
            //} else {
              //  return res.render('register')
              
        res.render("register")
        },
        store: (req, res) =>{

            let errors = {};
            //chequear los campos obligatorios
            
            if(req.body.nombre == ""){ // El nombre no debe esta vacio
                errors.register = "Nombre no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            }else if(req.body.apellido == ""){ // El apellido no debe esta vacio
                errors.register = "Apellido no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')    
            }else if(req.body.email == ""){ // El mail no debe esta vacio
                errors.register = "Email no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            }else if(req.body.usuario == ""){ // El usuario no debe esta vacio
                errors.register = "Usuario no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')
            }else if(req.body.edad == ""){ // La edad no debe esta vacia
                errors.register = "Edad no puede estar vacio"
                res.locals.errors = errors
        
                return res.render('register')
            } else if (req.body.contraseña == ""){ // El password no este vacio
                errors.register = "Contraseña no puede estar vacio"
                res.locals.errors = errors
    
                return res.render('register')
            } else if(req.body.repetir == ""){
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
                            fecha_creación:"2020-06-06 10:55:00",
                            img_usuario:""
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
            // Control de acceso
            //if(req.session.user != undefined){
             //   return res.redirect('/')
            //} else {
             //   return res.render('login')
            //} 
            res.render('login')
        },
        logueado: (req,res)=>{
            // Variable para guardar errores
            let errors = {};
        
            // Buscar el usuario por medio del mail
            usuarios.findOne({
                where: [{mail: req.body.email}]
            })
            .then( (resultado) => {
                if(resultado==null){
                    errors.login = "Email es incorrecto";
                    res.locals.error = errors;
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
           /* const username = req.body.usuario;*/
            res.render('profile', {productos:productos});
        },
        edit: (req, res) =>{

            res.render('profile-edit')
        },
        store: (req,res) =>{
            let userId = req.params.id;
            let usuarioActualizar = req.body
            usuarios.update(
                usuarioActualizar, 
                {
                    where: {
                        id: userId
                    }
                }
            )
                .then(()=> res.redirect(`/users/profile`))
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
    
        },
        
    },
   
}



module.exports = usersController;

