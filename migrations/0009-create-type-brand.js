'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TypeBrands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Types', key: 'id' }
      },
      brandId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Brands', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TypeBrands');
  }
};