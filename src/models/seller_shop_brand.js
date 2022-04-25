'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Seller_Shop_Brand extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Seller_Shop_Brand.init({
        sellerId: DataTypes.INTEGER,
        shopId: DataTypes.INTEGER,
        brandId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Seller_Shop_Brand',
    });
    return Seller_Shop_Brand;
};