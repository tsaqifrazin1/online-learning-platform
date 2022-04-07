const NotFoundError = require("../../exceptions/NotFoundError");
const { category_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      next();
    }
    const category = await category_course.findOne({
      where: {
        id,
        flag: "1",
      },
    });

    if (!category) {
      throw new NotFoundError("Id tidak ditemukan");
    }

    res.status(200).json({
      status: "success",
      data:{
        category,
      }
    });
  } catch (error) {
    next(error);
  }
};
