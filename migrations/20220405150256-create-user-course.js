"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "user_courses",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        course_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "courses",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "cascade",
          allowNull: false,
        },
        flag: {
          type: Sequelize.ENUM("1", "0"),
          defaultValue: "1",
          allowNull: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ["course_id", "user_id"],
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_courses");
  },
};
