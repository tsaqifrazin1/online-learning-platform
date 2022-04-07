const { sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { type } = req.params;
    const query = `SELECT module_total, time, name, id, price FROM courses `;

    let add;
    switch (type) {
      case "lowest":
        add = "ORDER BY price ASC";
        break;
      case "highest":
        add = "ORDER BY price DESC";
        break;
      case "free":
        add = "WHERE price = 0";
        break;
      default:
        add = "";
    }

    const result = await sequelize.query(query + add);
    res.status(200).json({
      status: "success",
      data: {
        sort: result[0],
      }
    });
  } catch (error) {
    next(error);
  }
};
