const { tokenVerify } = require("../utils");
const AuthenticationError = require("../exceptions/AuthenticationError");

const authentication = async (req, res, next) => {
  try {
    const access_token = req.headers.authorization
      ? req.headers.authorization
      : req.query.token;
    if (!access_token) {
      throw new AuthenticationError("Please Login");
    }
    const bearer = access_token.split(" ");

    const user = tokenVerify(bearer[1]);
    if (user) {
      req.loginUser = user;
      next();
    } else {
      throw new AuthenticationError("Please login");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
