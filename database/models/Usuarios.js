module.exports = (sequelize, dataTypes)=>{
    let alias = "Usuarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        nombre_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: dataTypes.TINYINT,
            allowNull: false,
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        created_at:{
              type: dataTypes.DATE,
              allowNull: false,
              defaultValue: sequelize.literal('NOW()')
          }, 
          updated_at:{
            type: dataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('NOW()')
        }, 
        img_usuario: {
            type: dataTypes.STRING,
        },
        fecha_nacimiento: {
            type: dataTypes.STRING,
            allowNull:false,
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true,
        updated_at:"updateTimestamp"
    }

    const Usuarios = sequelize.define(alias, cols, config)
    Usuarios.associate = function (models){
        Usuarios.hasMany(models.Productos, {
            as:"productosCreados",
            foreignKey:"usuario_id"
        }),
        Usuarios.belongsToMany(models.Productos,{
            as:"productos",
            through:"cliente_productos",
            foreignKey:"usuario_id",
            otherKey:"producto_id",
            timestamps:false
        })
        Usuarios.hasMany(models.Comentarios, {
            as:"comentarios",
            foreignKey:"usuario_id",
            sourceKey:"id"
        })
    }
    return Usuarios;
}