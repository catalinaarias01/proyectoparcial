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
        created_at:{
            type:dataTypes.DATE,
            allowNull:false,
            defaultValue: sequelize.literal('NOW()')
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
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Comentarios = sequelize.define(alias, cols, config)
    Comentarios.asssociate = function (models) {
        Comentarios.belongsTo(models.Productos,{
            as:"productos",
            foreignKey:"producto_id"
        }),
        Comentarios.belongsTo(models.Usuarios,{
            as:"usuarios",
            foreignKey:"usuario_id",
            targetKey:"id"
        })
    }
    return Comentarios;
}