"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_course.belongsTo(models.user);
      user_course.belongsTo(models.course);
    }
  }
  user_course.init(
    {
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "courses",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
        allowNull: false
      },
      flag: {
        type: DataTypes.ENUM("1", "0"),
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "user_course",
      underscored: true,
    }
  );
  return user_course;
};
