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
            // define association here
            Product.hasOne(models.Markdown, { foreignKey: 'productId', })
        }
    };
    Product.init({
        name: DataTypes.STRING,
        brandId: DataTypes.STRING,
        description: DataTypes.STRING,
        count: DataTypes.INTEGER,
        quanlity: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};