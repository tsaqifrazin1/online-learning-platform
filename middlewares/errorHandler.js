module.exports = (err, req, res, next) => {
  console.log(err);
  if (err.status) {
    res.status(200).json({
      status: err.status,
      isSuccess: false,
      message: err.message,
    });
  } else if (err.name == "SequelizeValidationError") {
    if (err.errors.length == 1) {
      res.status(200).json({
        status: 400,
        isSuccess: false,
        message: err.errors[0].message,
      });
    } else {
      let message = err.errors.map((element) => {
        return element.message;
      });
      res.status(200).json({
        status: 400,
        isSuccess: false,
        message: message,
      });
    }
  } else if (err.name == "SequelizeUniqueConstraintError") {
    if (err.errors.length == 1) {
      res.status(200).json({
        status: 400,
        isSuccess: false,
        message: "Data sudah ada",
      });
    } else {
      let message = err.errors.map((element) => {
        return element.message;
      });
      res.status(200).json({
        status: 400,
        isSuccess: false,
        message: message,
      });
    }
  } else {
    res.status(200).json({
      status: 500,
      isSuccess: false,
      message: "Mohon maaf. Server sedang bermasalah",
    });
  }
};
