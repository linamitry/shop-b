'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductInfo.init({
    title: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    description: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'ProductInfo',
  })
  ProductInfo.associate = models => {
  ProductInfo.belongsTo(models.Product,{foreignKey: "productId"})
  }
  return ProductInfo;
};