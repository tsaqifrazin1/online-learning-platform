const route = require("express").Router();
const { userController } = require("../controllers/index");
const { authentication, adminAuthorization } = require("../middlewares");

route.post("/signUp", userController.createUser);

route.use(authentication);
route.use(adminAuthorization);
route.get("/", userController.readAllUser);
route.get("/:id", userController.readOneUser);
route.put("/:id", userController.updateUser);
route.delete("/:id", userController.deleteUser);

module.exports = route;
