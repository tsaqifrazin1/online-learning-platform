const { cloudinary } = require("../config/cloudinary");
const InvariantError = require("../exceptions/InvariantError");
module.exports = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file,{});
    console.log(result.url);
    return result.url;
  } catch (error) {
    throw new InvariantError(error.message)
  }
};
