const {DataTypes} = require('sequelize')
module.exports = (sequelize) => {
    const Category = sequelize.define('categories', {
        idCategory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Category.associate = (models) => {
        Category.hasMany(models.trails, {
            foreignKey: 'idTrails',
            as: 'trails',
        });
    };

    return Category
}