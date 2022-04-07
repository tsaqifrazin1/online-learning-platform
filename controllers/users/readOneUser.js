const NotFoundError = require("../../exceptions/NotFoundError");
const { user } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await user.findOne({
      where: {
        id,
        flag: "1",
      },
      attributes: {
        exclude: ["token", "pass"],
      },
    });

    if (!users) {
      throw new NotFoundError("User tidak ditemukan");
    }

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};
