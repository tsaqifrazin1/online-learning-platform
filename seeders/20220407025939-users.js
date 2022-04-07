'use strict';
const data = require("../data/_users_.json").users

data.forEach(element => {
  element['updated_at'] = new Date()
  element['created_at'] = new Date()

})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", data, {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", data, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
