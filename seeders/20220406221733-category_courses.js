'use strict';
const data = require("../data/_category_.json").category

data.forEach(element => {
  element['updated_at'] = new Date()
  element['created_at'] = new Date()

})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("category_courses", data, {})

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("category_courses", data, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
