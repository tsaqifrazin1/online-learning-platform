"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category_course.hasMany(models.course);
    }
  }
  category_course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      flag: {
        type: DataTypes.ENUM("1", "0"),
        allowNull: false,
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "category_course",
      underscored: true,
    }
  );
  return category_course;
};
