const route = require("express").Router();

const userRoute = require("./userRoute");
const categoryRoute = require("./categoryRoute");
const courseRoute = require("./courseRoute");
const authenticationsRoute = require("./authenticationsRoute");
const userCourseRoute = require("./userCourseRoute");

route.use("/user", userRoute);
route.use("/category", categoryRoute);
route.use("/course", courseRoute);
route.use("/authentications", authenticationsRoute);
route.use("/user_course", userCourseRoute);

module.exports = route;
