const { course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const courses = await course.findAll({
      where: {
        flag: "1",
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        courses,
      }
    });
  } catch (error) {
    next(error);
  }
};
