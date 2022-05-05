'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class NewsMarkdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            NewsMarkdown.belongsTo(models.News, { foreignKey: 'newsId' })

        }
    };
    NewsMarkdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        newsId: DataTypes.INTEGER,
        description: DataTypes.TEXT('long'),
        image: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'NewsMarkdown',
    });
    return NewsMarkdown;
};