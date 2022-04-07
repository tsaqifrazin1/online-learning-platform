require("dotenv").config();
const express = require("express");
const app = express();
const { errorHandler } = require("./middlewares");
const cors = require("cors");
const route = require("./routes");
const fileupload = require('express-fileupload')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload({useTempFiles:true}))

app.use(route);
app.use(errorHandler);

module.exports = app;
