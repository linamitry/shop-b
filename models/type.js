'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Type.init({
    name: { 
      type: DataTypes.STRING, 
      unique: true, 
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Type',
  });
  Type.associate = models => {
    Type.hasMany(models.Product,{foreignKey: "typeId"})
    Type.belongsToMany(models.Brand,{through:'TypeBrands', foreignKey: "brandId"})

    // Type.belongsTo(models.Type, {
    //   as: "Parent"
    // });
    // Type.hasMany(models.Type, {
    //   as: "Children",
    //   foreignKey: "parent_id"
    // });
  }
  return Type;
};

