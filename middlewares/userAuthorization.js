const AuthorizationError = require("../exceptions/AuthorizationError");

const userAuthorization = async (req, res, next) => {
  try {
    const role = req.loginUser.role;
    if (role == "user" || role == "admin") {
      next();
    } else {
      throw new AuthorizationError("Anda tidak berhak mengakses ini");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userAuthorization;
