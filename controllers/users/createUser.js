const { user } = require("../../models");
const bcrypt = require("bcrypt");
const { uploadImage } = require('../../utils/index')

module.exports = async (req, res, next) => {
  try {
    const { fullname, email, pass } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 10);

    const file = req.files
    if (file){
      var image = await uploadImage(file.photo.tempFilePath)
    }

    const userData = {
      role: "user",
      fullname,
      email,
      pass: hashedPassword,
      image
    };


    const newuser = await user.create(userData, {
      returning: true,
    });

    res.status(201).json({
      status: "success",
      data: newuser,
    });
  } catch (error) {
    next(error);
  }
};
