const NotFoundError = require("../../exceptions/NotFoundError");
const { course, category_course } = require("../../models");
const { uploadImage } = require('../../utils/index')

module.exports = async (req, res, next) => {
  try {
    const { name, price, category_course_id, module_total, time } = req.body;

    const file = req.files
    if (file){
      var image = await uploadImage(file.photo.tempFilePath)
    }
    const check = await category_course.findOne({
      where: {
        id: category_course_id,
      },
    });

    if (!check) {
      throw new NotFoundError('Category tidak ditemukan')
    }
    const newCourse = {
      name,
      price,
      category_course_id,
      module_total,
      time,
      image
    };
    const courses = await course.create(newCourse, {
      returning: true,
    });

    res.status(201).json({
      status: "success",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};
