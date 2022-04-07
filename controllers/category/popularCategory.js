const { sequelize } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const popular = await sequelize.query(
      `select cc.id , count(cc.id) total, cc.name from user_courses uc
        inner join courses c on c.id = uc.course_id 
        inner join category_courses cc on cc.id = c.category_course_id
        group by cc.id order by total desc;`
    );
    
    const category = {
      popular_category: popular[0][0].name,
      total: popular[0][0].total,
      id: popular[0][0].id
    };

    res.status(200).json({
      status: "success",
      data: {
          category
      },
    });
  } catch (error) {
    next(error);
  }
};
