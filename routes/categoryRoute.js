const route = require("express").Router();
const { param } = require("express-validator");
const { categoryController } = require("../controllers/index");
const {
  authentication,
  adminAuthorization,
  userAuthorization,
} = require("../middlewares/index");

route.use(authentication);
route.use(userAuthorization);
route.get("/", categoryController.readAllCategory);
route.get("/popular", categoryController.popularCategory);

route.use(adminAuthorization);

route.post("/", categoryController.createCategory);

route.get(
  "/:id",
  [param("id").isInt().toInt()],
  categoryController.readOneCategory
);
route.put("/:id", categoryController.updateCategory);
route.delete("/:id", categoryController.deleteCategory);

module.exports = route;
