'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Receipts', {



            // PhoneNumber: DataTypes.STRING,
            // Address: DataTypes.TEXT
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                primaryKey: true,

                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.INTEGER
            },
            statusId: {
                type: Sequelize.STRING
            },
            promotionId: {
                type: Sequelize.INTEGER
            },

            quantity: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.INTEGER
            },
            unitPrice: {
                type: Sequelize.INTEGER
            },
            PhoneNumber: {
                type: Sequelize.STRING
            },
            Address: {
                type: Sequelize.TEXT

            },
            size: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            token: {
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
        await queryInterface.dropTable('Receipts');
    }
};