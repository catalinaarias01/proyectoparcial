module.exports = (sequelize, dataTypes)=>{
    let alias = "Usuarios";
    let cols = {};
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuarios = sequelize.define(alias, cols, config)
    return Usuarios;
}