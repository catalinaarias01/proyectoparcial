module.exports = (sequelize, dataTypes)=>{
    let alias = "Comentarios";
    let cols = {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:dataTypes.INTEGER,
            allowNull:false,
 
        },
        texto:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        fecha_creacion:{
            type:dataTypes.DATE,
            allowNull:false,
        },
        producto_id:{
            type:dataTypes.INTEGER,
            allowNull:false,
        },
        usuario_id:{
            type:dataTypes.INTEGER,
            allowNull:false,
        }
    };
    let config = {
        table: "comentarios",
        timestamps: true,
        underscored: true
    }

    const Comentarios = sequelize.define(alias, cols, config)
    return Comentarios;
}