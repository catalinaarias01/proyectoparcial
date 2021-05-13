module.exports = (sequelize, dataTypes)=>{
    let alias = "Productos";
    let cols = {};
    let config = {
        table: "productos",
        timestamps: false,
        underscored: true
    }

    const Productos = sequelize.define(alias, cols, config)
    return Productos;
}