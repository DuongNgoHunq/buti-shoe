'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'duongngohung1118@2gmail.com',
      password: '123456', //plain text
      firstName: 'DNH',
      lastName: '1118',
      phoneNumber: '0335381286',
      address: 'USA',
      gender: 1,
      image: '1 ban nam rat dep trai',
      roleId: 'R1',
      positionId: 'Doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
