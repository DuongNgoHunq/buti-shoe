'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            News.hasOne(models.NewsMarkdown, { foreignKey: 'newsId' })
        }
    };
    News.init({
        title: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'News',
    });
    return News;
};