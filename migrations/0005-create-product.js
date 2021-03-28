'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { 
        type: Sequelize.STRING, 
        unique: true, 
        allowNull: false 
      },
      price: { 
        type: Sequelize.INTEGER,  
        allowNull: false 
      },
      rating: { 
        type: Sequelize.INTEGER,  
        defaultValue: 0 
      },
      img: { 
        type: Sequelize.STRING,  
        allowNull: false 
      },
      brandId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Brands',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      typeId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('Products');
  }
};