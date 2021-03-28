'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(Brand,{foreignKey: "brandId"})
      // this.belongsTo(Type,{foreignKey: "typeId"})
      // define association here
      // this.Product = this.belongsTo(models.Brand, {foreignKey: "brandId"});
    }
  };
  Product.init({
    name: { 
      type: DataTypes.STRING, 
      unique: true, 
      allowNull: false 
    },
    price: { 
      type: DataTypes.INTEGER,  
      allowNull: false 
    },
    rating: { 
      type: DataTypes.INTEGER,  
      defaultValue: 0 
    },
    img: { 
      type: DataTypes.STRING,  
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  Product.associate = models => {
    Product.belongsTo(models.Brand,{foreignKey: "brandId"})
    Product.belongsTo(models.Type,{foreignKey: "typeId"})
    Product.hasMany(models.Rating,{foreignKey: "productId"})
    Product.hasMany(models.CartProduct,{foreignKey: "productId"})
    Product.hasMany(models.ProductInfo,{foreignKey: "productId"},{as: 'info'})
  };
  return Product;
};