'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userGroups', {
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      }
    });

    await queryInterface.addConstraint('userGroups', {
      fields: ['name'],
      type: 'unique',
      name: 'uq_user_groups_name',
  });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('userGroups');
  }
};
