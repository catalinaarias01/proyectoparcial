
//const productos = require('../data/productos');
//const usuarios = require('../data/usuarios');

const db = require('../database/models');
const productos = db.Productos;
const comentarios = db.Comentarios;
const cliente_productos = db.Cliente_productos;
const usuarios = db.Usuarios;
const bcrypt = require('bcryptjs');
const { localsName } = require('ejs');


const op = db.Sequelize.Op;

let usersController = {

    register: {
        index: (req, res) =>{
            //Control de acceso
            if(req.session.usuario != undefined){
                return res.redirect('/')
            } else {
                return res.render('register')
            }
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
            } else if (req.body.contraseña.length < 4){ // El password no este vacio
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
                            img_usuario: "perfil.jpeg"
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
              //Control de acceso
              if(req.session.usuario != undefined){
                return res.redirect('/')
            } else {
                return res.render('login')
            }
            
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
           usuarios.findAll({
            where:[{ id : req.session.usuario.id}],
            include:["productos", "productosCreados","comentarios"]
        })
            .then(resultado=>{

                    console.log(resultado[0].comentarios)
                    res.render('profile', {productos:resultado[0].productosCreados, productosLikeados:resultado[0].productos, comentariosUsuario:resultado[0].comentarios});
            })

            .catch(error=>{
                console.log(error);
                res.send(`El error es ${error}`)
            })
        },
        edit: (req, res) =>{

            res.render('profile-edit')
        },
        store: (req,res) =>{
            let userId = req.params.id;
            let usuario = {
                id:req.session.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail:req.body.mail,
                nombre_usuario: req.body.nombre_usuario,                                         
                edad: req.body.edad,
                contraseña:bcrypt.hashSync(req.body.contraseña, 10),
                img_usuario:req.file.filename,
            } 
            usuarios.update(
                {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    mail:req.body.mail,
                    nombre_usuario: req.body.nombre_usuario,
                    edad: req.body.edad,
                    contraseña:bcrypt.hashSync(req.body.contraseña, 10),
                    img_usuario:req.file.filename,
                },
                {
                where:{id:req.session.id},
                },
                )
                .then(()=>{
                   
                    req.session.usuario = usuario;
                    res.redirect(`/users/profile`)
                })
                .catch(err => console.log(err))
        
        }

        /*let errors = {};

        let userId = req.params.id;

        if (req.body.nombre==req.session.usuario.nombre) {
            errors.edit = "Tu nuevo nombre debe ser diferente al anterior";
            res.locals.error = errors;
            return res.render('profile-edit') 
        } else if (req.body.apellido==req.session.usuario.apellido) {
            errors.edit = "Tu nuevo apellido debe ser diferente al anterior";
            res.locals.error = errors;
            return res.render('profile-edit') 
        } else if (req.body.edad==req.session.usuario.edad) {
            errors.edit = "Tu nueva edad debe ser diferente a la anterior";
            res.locals.error = errors;
            return res.render('profile-edit')
        } else if (req.body.mail==req.session.usuario.mail) {
            errors.edit = "Tu nuevo email debe ser diferente al anterior";
            res.locals.error = errors;
            return res.render('profile-edit')
        } else if (req.body.nombre_usuario==req.session.usuario.nombre_usuario) {
            errors.edit = "Tu nuevo usuario debe ser diferente al anterior";
            res.locals.error = errors;
            return res.render('profile-edit')
        } else{usuarios.update(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                mail:req.body.mail,
                nombre_usuario: req.body.nombre_usuario,
                edad: req.body.edad,
                //contraseña:bcrypt.hashSync(req.body.contraseña, 10),
                img_usuario:req.file.filename,
            },
            {
            where:{id:userId},
            },
            )
            .then(()=> res.redirect(`/users/profile`))
            .catch(err => console.log(err))
    
        } console.log(errors)
    } */     
        
    },

        usersId: {
            index: (req, res) => {    
                const userId = req.params.id;
                usuarios.findAll({
                    where:[{ id : userId}],
                    include:[{model:productos, as:"productosCreados", include:["comentarios"]}]
                })
                    .then(resultado=>{
                        comentarios.findAll({
                            where:[{usuario_id:req.params.id}]
                        })
                        .then(resultadoComentarios=>{
                            res.render('user-profile', {usuario:resultado, comentarios:resultadoComentarios})
                        })
                       
                    })
                    .catch(error=>{
                        console.log(error);
                        res.send(`El error es ${error}`)
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

