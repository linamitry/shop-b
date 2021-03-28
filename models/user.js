'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true
    },    
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = models => {
    User.hasOne(models.Cart,{foreignKey: "userId"})
    User.hasMany(models.Rating,{foreignKey: "userId"})
  }
  return User;
};