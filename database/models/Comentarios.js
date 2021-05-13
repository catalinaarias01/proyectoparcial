module.exports = (sequelize, dataTypes)=>{
    let alias = "Comentarios";
    let cols = {};
    let config = {
        table: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Comentarios = sequelize.define(alias, cols, config)
    return Comentarios;
}