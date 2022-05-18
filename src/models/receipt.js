'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receipt.belongsTo(models.User, { foreignKey: 'customerId', targetKey: 'id', as: 'customerData' })
    }
  };
  Receipt.init({
    productId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    statusId: DataTypes.STRING,
    promotionId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    PhoneNumber: DataTypes.STRING,
    Address: DataTypes.TEXT,
    size: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Receipt',
  });
  return Receipt;
};