const InvariantError = require("../../exceptions/InvariantError");
const { user_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { course_id } = req.body;
    const { id } = req.loginUser;

    const newUserCourseData = {
      course_id,
      user_id: id,
    };

    const userCourseData = await user_course.create(newUserCourseData, {
      returning: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        userCourseData,
      }
    });
  } catch (error) {
    next(error);
  }
};
