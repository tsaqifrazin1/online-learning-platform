"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.user_course);
    }
  }
  user.init(
    {
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pass: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      flag: {
        type: DataTypes.ENUM("1", "0"),
        allowNull: false,
        defaultValue: "1",
      },
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return user;
};
