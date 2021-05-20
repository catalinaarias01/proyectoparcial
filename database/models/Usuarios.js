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
        fecha_creación:{
              type: dataTypes.DATE,
              allowNull: false,
          }, 
        img_usuario: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuarios = sequelize.define(alias, cols, config)
    return Usuarios;
}