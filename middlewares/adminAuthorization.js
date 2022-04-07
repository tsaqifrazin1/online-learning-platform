const AuthorizationError = require("../exceptions/AuthorizationError");

const adminAuthorization = async (req, res, next) => {
  try {
    const role = req.loginUser.role;
    if (role == "admin") {
      next();
    } else {
      throw new AuthorizationError("Anda tidak berhak mengakses ini");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = adminAuthorization;
