'use strict';
const data = require("../data/_courses_.json").courses

data.forEach(element => {
  element['updated_at'] = new Date()
  element['created_at'] = new Date()

})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("courses", data, {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("courses", data, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
