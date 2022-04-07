const { tokenEncode, tokenVerify, decode } = require("./token");

module.exports = {
  tokenEncode,
  tokenVerify,
  decode,
  uploadImage: require('./uploadImage')
};
