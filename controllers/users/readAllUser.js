const { user } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const users = await user.findAll({
      where: {
        flag: "1",
      },
      attributes: {
        exclude: ["token", "pass"],
      },
    });

    res.status(200).json({
      status: "success",
      data: {
          users,
      }
    });
  } catch (error) {
    next(error);
  }
};
