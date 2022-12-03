const {DataTypes} = require('sequelize')
module.exports = (sequelize) => {
    const Trail = sequelize.define('trails', {
        idTrails: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        idCategory: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nodes:{
            type: DataTypes.JSON,
            allowNull: false
        },
        content:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
    })
    Trail.associate = (models) => {
        Trail.belongsTo(models.categories, {
            foreignKey: 'idCategory',
            as: 'categories',
        });
    };

    return Trail
}