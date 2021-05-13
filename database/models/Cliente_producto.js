module.exports = (sequelize, dataTypes)=>{
    let alias = "Cliente_producto";
    let cols = {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:dataTypes.INTEGER,
            allowNull:false
        },
        producto_id:{
            type:dataTypes.INTEGER,
            allowNull:false

        },
        usuario_id:{
            type:dataTypes.INTEGER,
            allowNull:false
        }
    };
    let config = {
        table: "cliente_producto",
        timestamps: false,
        underscored: true
    }

    const Cliente_producto = sequelize.define(alias, cols, config)
    return Cliente_producto;
}