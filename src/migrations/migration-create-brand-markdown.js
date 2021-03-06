'use strict';
module.exports = {



    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('BrandMarkdowns', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contentHTML: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            contentMarkdown: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            brandId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            image: {
                allowNull: true,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('BrandMarkdowns');
    }
};