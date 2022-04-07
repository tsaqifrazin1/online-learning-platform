const { category_course } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = {
      name,
    };
    const category = await category_course.create(newCategory, {
      returning: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        category,
      }
    });
  } catch (error) {
    next(error);
  }
};
