'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('users', {
      fields: ['userGroupId'],
      type: 'foreign key',
      name: 'fk_user_group_id',
      references: {
        table: 'userGroups',
        field: 'userGroupId',
      },
    });

    await queryInterface.bulkInsert('userGroups', [{
      userGroupId: 1,
      name: 'Comum',
    }, {
      userGroupId: 2,
      name: 'Premium',
    }, {
      userGroupId: 3,
      name: 'Super',
    }])
   
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync('admin', salt)
    await queryInterface.bulkInsert('users', [{
      userId: 1,
      userGroupId: 3,
      name: 'Administrador',
      email: 'admin@admin.com',
      password: hash,
      
    }])

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('users', 'fk_user_group_id')
  }
}