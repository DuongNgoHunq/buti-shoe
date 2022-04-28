'use strict';
module.exports = {



    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Markdowns', {
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
            productId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            brandId: {
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },
            quanlity: {
                type: Sequelize.INTEGER
            },
            price: {
                allowNull: true,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Markdowns');
    }
};