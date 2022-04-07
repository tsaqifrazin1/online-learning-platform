const route = require("express").Router();
const { authenticationsController } = require("../controllers/index");

route.post("/", authenticationsController.login);

module.exports = route;
