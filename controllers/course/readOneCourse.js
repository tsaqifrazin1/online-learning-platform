const NotFoundError = require("../../exceptions/NotFoundError");
const { course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      next();
    }
    const courses = await course.findOne({
      where: {
        id,
        flag: "1",
      },
    });

    if (!courses) {
      throw new NotFoundError("Course tidak ditemukan");
    }

    res.status(200).json({
      status: "success",
      data: {
        courses,
      },
    });
  } catch (error) {
    next(error);
  }
};
