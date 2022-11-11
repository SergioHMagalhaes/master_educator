const {DataTypes} = require('sequelize')
module.exports = (sequelize) => {
    const User = sequelize.define('users', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userGroupId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    User.associate = (models) => {
        User.belongsTo(models.userGroups, {
            foreignKey: 'userGroupId',
            as: 'userGroups',
        });
    };

    return User
}