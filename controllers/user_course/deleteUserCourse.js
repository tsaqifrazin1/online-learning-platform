const NotFoundError = require("../../exceptions/NotFoundError");
const { user_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await user_course.update(
      { flag: "0" },
      {
        where: {
          id,
          flag: '1'
        },
      }
    );

    if (!data[0]) {
      throw new NotFoundError(
        "Gagal menghapus User dari Course. Id tidak ditemukan"
      );
    }
    res.status(200).json({
      status: "success",
      msg: "user_course berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};
