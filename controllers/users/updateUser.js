const NotFoundError = require("../../exceptions/NotFoundError");
const { user } = require("../../models");
const { uploadImage } = require('../../utils')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fullname } = req.body;

    const file = req.files
    if (file){
      var image = await uploadImage(file.photo.tempFilePath)
    }

    const userNewData = {
      fullname,
      image
    };

    const check = await user.update(userNewData, {
      where: {
        id,
        flag: "1",
      },
    });

    if (!check[0]) {
      throw new NotFoundError("User tidak ditemukan");
    }
    const users = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["token", "pass"],
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        users
      },
    });
  } catch (error) {
    next(error);
  }
};
