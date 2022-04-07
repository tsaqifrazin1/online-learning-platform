const NotFoundError = require("../../exceptions/NotFoundError");
const { sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { name } = req.query;
    const result = await sequelize.query(
      `SELECT module_total, time, name, id, price FROM courses WHERE name LIKE '${name}%'`
    );
    if (!result) {
      throw new NotFoundError("Course tidak ditemukan");
    }

    res.status(200).json({
      status: "success",
      data: {
        courses: result[0]
      },
    });
  } catch (error) {
    next(error);
  }
};
