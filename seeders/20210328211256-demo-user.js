'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [{
      name: 'Плиты',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {})
  }
};
