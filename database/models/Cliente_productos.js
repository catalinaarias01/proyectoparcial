module.exports = (sequelize, dataTypes)=>{
    let alias = "Cliente_productos";
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
        tableName: "cliente_productos",
        timestamps: false,
        underscored: true
    }

    const Cliente_productos = sequelize.define(alias, cols, config)
    return Cliente_productos;
}