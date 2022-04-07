const NotFoundError = require("../../exceptions/NotFoundError");
const { user_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.loginUser;
    const userCourse = await user_course.findAll({
      where: {
        flag: "1",
        user_id: id,
      },
    });

    if (!userCourse) {
      throw new NotFoundError("User belum terdaftar dalam course");
    }
    res.status(200).json({
      status: "success",
      data: {
        userCourse
      },
    });
  } catch (error) {
    next(error);
  }
};
