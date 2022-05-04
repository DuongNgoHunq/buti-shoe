'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BrandMarkdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            BrandMarkdown.belongsTo(models.Product, { foreignKey: 'productId' })

        }
    };
    BrandMarkdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        brandId: DataTypes.INTEGER,
        description: DataTypes.TEXT('long'),
        image: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'BrandMarkdown',
    });
    return BrandMarkdown;
};