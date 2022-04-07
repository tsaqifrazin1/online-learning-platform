const route = require("express").Router();
const { userCourseController } = require("../controllers/index");
const { authentication, userAuthorization } = require("../middlewares/index");

route.use(authentication);
route.use(userAuthorization);
route.post("/", authentication, userCourseController.createUserCourse);
route.delete("/:id", authentication, userCourseController.deleteUserCourse);
route.get("/", authentication, userCourseController.readAllUserCourse);

module.exports = route;
