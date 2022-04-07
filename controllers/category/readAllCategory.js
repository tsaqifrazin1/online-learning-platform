const { category_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const category = await category_course.findAll({
      where: {
        flag: "1",
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {
    next(error);
  }
};
