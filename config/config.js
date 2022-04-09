if (process.env.NODE_ENV != "production" || process.env.NODE_ENV != "staging")
  require("dotenv").config();

const username = process.env["DB_USER"];
const password = process.env["DB_PASSWORD"];
const database = process.env["DB_DATABASE"];
const databaseTest = process.env["DB_DATABASE_TEST"];
const host = process.env["DB_HOST"];
const dialect = process.env["DB_DIALECT"];

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database: databaseTest,
    host,
    dialect,
    logging: false,
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    dialect,
  },
};
