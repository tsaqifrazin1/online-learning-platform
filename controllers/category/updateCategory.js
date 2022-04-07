const NotFoundError = require("../../exceptions/NotFoundError");
const { category_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const newCategory = {
      name,
    };
    const check = await category_course.update(newCategory, {
      where: {
        id,
        flag: "1",
      },
    });

    if (!check[0]) {
      throw new NotFoundError("Id tidak ditemukan");
    }
    const category = await category_course.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        category
      },
    });
  } catch (error) {
    next(error);
  }
};
