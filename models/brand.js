'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(Product,{foreignKey: 'brandId'})
      // define association here
    }
  };
  Brand.init({
    name: { 
      type: DataTypes.STRING, 
      unique: true, 
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Brand',
  });
  Brand.associate = models => {
    Brand.hasMany(models.Product,{foreignKey: "brandId"})
    Brand.belongsToMany(models.Type,{through:'TypeBrands', foreignKey: "typeId"})
  }
  return Brand;
};