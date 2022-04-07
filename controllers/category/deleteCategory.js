const NotFoundError = require("../../exceptions/NotFoundError");
const { category_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await category_course.update(
      { flag: "0" },
      {
        where: {
          id,
          flag: '1'
        },
      }
    );

    if (!data[0]) {
      throw new NotFoundError("Id tidak ditemukan");
    }
    res.status(200).json({
      status: "success",
      msg: "category_course berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};
