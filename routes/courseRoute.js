const route = require("express").Router();
const { param } = require("express-validator");
const { courseController } = require("../controllers/index");
const {
  authentication,
  adminAuthorization,
  userAuthorization,
} = require("../middlewares/index");

route.use(authentication);
route.use(userAuthorization);
route.get("/sort/:type", courseController.sortCourse);
route.get("/search", courseController.searchCourse);
route.get("/stat", courseController.statistics);
route.get(
  "/",
  authentication,
  adminAuthorization,
  courseController.readAllCourse
);

route.get(
  "/:id",
  [param("id").isInt().toInt()],
  courseController.readOneCourse
);

route.use(adminAuthorization);
route.post("/", courseController.createCourse);
route.put("/:id", courseController.updateCourse);
route.delete("/:id", courseController.deleteCourse);

module.exports = route;
