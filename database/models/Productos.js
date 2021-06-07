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
            allowNull:false,
            defaultValue: sequelize.literal('NOW()')
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
    Productos.associate = function (models){
        Productos.belongsToMany(models.Usuarios, {
            as:"usuarios",
            through:"cliente_productos",
            foreignKey:"producto_id",
            otherKey:"usuario_id",
            timestamps:false
        }),
        Productos.belongsTo(models.Usuarios,{
            as:"usuarioCreadores",
            foreignKey:"usuario_id"
        }),
        Productos.hasMany(models.Comentarios, {
            as:"comentarios",
            foreignKey:"producto_id"
        })
    }
    return Productos;
}