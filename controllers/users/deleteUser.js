const NotFoundError = require("../../exceptions/NotFoundError");
const { user } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await user.update(
      { flag: "0" },
      {
        where: {
          id,
          flag: '1'
        },
      }
    );

    if (!data[0]) {
      throw new NotFoundError("User tidak ditemukan");
    }
    res.status(200).json({
      status: "success",
      msg: "user berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};
