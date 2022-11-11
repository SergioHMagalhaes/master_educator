'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userGroupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
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

    await queryInterface.addConstraint('users', {
      fields: ['email'],
      type: 'unique',
      name: 'uq_user_email',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
