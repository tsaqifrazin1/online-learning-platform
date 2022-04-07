const { sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const totalUser = await sequelize.query(
      `SELECT count(id) as total FROM users WHERE flag = '1'`
    );
    const totalCourse = await sequelize.query(
      `SELECT count(id) as total FROM courses WHERE flag = '1'`
    );
    const totalFreeCourse = await sequelize.query(
      `SELECT count(id) as total FROM courses WHERE flag = '1' AND price = 0`
    );
    const stat = {
      total_user: totalUser[0][0].total,
      total_course: totalCourse[0][0].total,
      total_free_course: totalFreeCourse[0][0].total,
    };
    res.status(200).json({
      status: "success",
      data: {
          stat
      },
    });
  } catch (error) {
    next(error);
  }
};
