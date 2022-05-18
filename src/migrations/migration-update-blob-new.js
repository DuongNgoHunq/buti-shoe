module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Products', 'count', {
                type: Sequelize.INTEGER,
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Products', 'count', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            }, {
                transaction,
            })
        ])
    }
};