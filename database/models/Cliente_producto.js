module.exports = (sequelize, dataTypes)=>{
    let alias = "Cliente_producto";
    let cols = {};
    let config = {
        table: "cliente_producto",
        timestamps: false,
        underscored: true
    }

    const Cliente_producto = sequelize.define(alias, cols, config)
    return Cliente_producto;
}