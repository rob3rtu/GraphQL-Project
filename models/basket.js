'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Basket.hasMany(models.BasketProduct, {as: 'products'});
    }
  }
  Basket.init({
    userId: DataTypes.INTEGER,
    voucher: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};