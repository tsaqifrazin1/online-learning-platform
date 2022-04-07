const NotFoundError = require("../../exceptions/NotFoundError");
const { uploadImage } = require("../../utils/index");
const { course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const file = req.files;
    if (file) {
      var image = await uploadImage(file.photo.tempFilePath);
    }

    const newCourse = {
      name,
      price,
      image,
    };
    const check = await course.update(newCourse, {
      where: {
        id,
        flag: "1",
      },
    });

    if (!check[0]) {
      throw new NotFoundError("Course tidak ditemukan");
    }
    const courses = await course.findOne({
      where: {
        id,
      },
    });
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
