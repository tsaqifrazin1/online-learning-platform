'use strict';
const data = require("../data/_user_courses_.json").user_courses

data.forEach(element => {
  element['updated_at'] = new Date()
  element['created_at'] = new Date()

})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("user_courses", data, {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_courses", data, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
