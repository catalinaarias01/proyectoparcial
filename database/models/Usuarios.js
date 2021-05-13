module.exports = (sequelize, dataTypes)=>{
    let alias = "Usuarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        nombre_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: dataTypes.TINYINT,
        },
        contraseña: {
            type: dataTypes.STRING,
        },
        img_usuario: {
            type: dataTypes.STRING,
        },
   /*      fecha_creacion:{
            type: dataTypes.DATE,
            allowNull: false,
        }, */
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuarios = sequelize.define(alias, cols, config)
    return Usuarios;
}