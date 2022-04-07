const NotFoundError = require("../../exceptions/NotFoundError");
const { course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await course.update(
      { flag: "0" },
      {
        where: {
          id,
          flag: '1'
        },
      }
    );

    if (!data[0]) {
      throw new NotFoundError("Course tidak ditemukan");
    }
    res.status(200).json({
      status: "success",
      msg: "course berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};
