'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.Rating = this.belongsTo(models.User,{foreignKey: "userId"});
    // or
      // this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
    }
  };
  Rating.init({
    rate: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Rating',
  });
  Rating.associate = models => {
    Rating.belongsTo(models.User,{foreignKey: "userId"});
    Rating.belongsTo(models.Product,{foreignKey: "productId"});
  }
  return Rating;
};