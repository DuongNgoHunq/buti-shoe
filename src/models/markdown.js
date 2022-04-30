'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Markdown.belongsTo(models.Product, { foreignKey: 'productId' })

        }
    };
    Markdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        productId: DataTypes.INTEGER,
        brandId: DataTypes.STRING,
        description: DataTypes.TEXT('long'),
        quanlity: DataTypes.INTEGER,

        price: DataTypes.INTEGER,
        image: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
};