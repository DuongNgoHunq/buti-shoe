'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Receipts', {


    //         productId: DataTypes.INTEGER,
    // customerId: DataTypes.INTEGER,
    // promotionId: DataTypes.INTEGER,
    // date: DataTypes.DATE,
    // quantity: DataTypes.INTEGER,
    // price: DataTypes.INTEGER,
    // unitPrice: DataTypes.INTEGER,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.INTEGER
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