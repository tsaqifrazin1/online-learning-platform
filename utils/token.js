const jwt = require("jsonwebtoken");

const tokenEncode = (obj) => {
  try {
    return jwt.sign(obj, process.env.SECRET);
  } catch (error) {
    throw {
      status: 400,
      message: "Terdapat masalah",
    };
  }
};

const decode = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    throw {
      status: 400,
      message: "Terdapat masalah",
    };
  }
};
const tokenVerify = (token) => {
  try {
    console.log(token, "=== verivy ==-");
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    throw {
      status: 401,
      message: "please login",
    };
  }
};

module.exports = {
  tokenEncode,
  tokenVerify,
  decode,
};
