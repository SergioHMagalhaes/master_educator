const {DataTypes} = require('sequelize')
module.exports = (sequelize) => {
    const UserGroup = sequelize.define('userGroups', {
        userGroupId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(280),
            allowNull: true,
        },

    })
    UserGroup.associate = (models) => {
        UserGroup.hasMany(models.users, {
            foreignKey: 'userGroupId',
            as: 'users',
        });
    };
    return UserGroup
}