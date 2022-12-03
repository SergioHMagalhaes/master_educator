'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trails', {
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
      nodes: {
        type: DataTypes.JSON,
        allowNull: false
      },
      content: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
      },
      height: {
        type: DataTypes.INTEGER,
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

    await queryInterface.createTable('categories', {
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

    await queryInterface.addConstraint('categories', {
      fields: ['name'],
      type: 'unique',
      name: 'name',
    });

    await queryInterface.addConstraint('trails', {
      fields: ['idCategory'],
      type: 'foreign key',
      name: 'fk_trails_id',
      references: {
        table: 'categories',
        field: 'idCategory',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trails');
    await queryInterface.dropTable('categories');
  }
};
