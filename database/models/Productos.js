module.exports = (sequelize, dataTypes)=>{
    let alias = "Productos";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull:false
        },
        nombre_producto:{
            type:dataTypes.STRING,
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING,
            allowNull:false
        },
        seccion:{
            type:dataTypes.STRING,
            allowNull:false
        },
        marca:{
            type:dataTypes.STRING,
            allowNull:false
        },
        img_url:{
            type:dataTypes.STRING,
            allowNull:false
        },
        fecha_creacion:{
            type: dataTypes.DATE,
            allowNull:false
        },
        usuario_id:{
            type: dataTypes.INTEGER,
            allowNull:false
        },
        comentarios_id:{
            type: dataTypes.INTEGER,
            allowNull:true
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    }

    const Productos = sequelize.define(alias, cols, config)
    return Productos;
}