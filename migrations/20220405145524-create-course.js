"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "category_courses",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      flag: {
        type: Sequelize.ENUM("1", "0"),
        defaultValues: "1",
        allowNull: false,
      },
      module_total: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  },
};
