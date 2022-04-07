const { user } = require("../../models");
const AuthenticationError = require("../../exceptions/AuthenticationError");
const bcrypt = require("bcrypt");
const { tokenEncode } = require("../../utils");

module.exports = async (req, res, next) => {
  try {
    const { pass, email } = req.body;

    const check = await user.findOne({
      where: {
        email,
      },
    });

    if (!check) {
      throw new AuthenticationError("Kredensial salah");
    }

    const { id, pass: hashedPassword } = check.dataValues;

    const match = await bcrypt.compare(pass, hashedPassword);

    if (!match) {
      throw new AuthenticationError("Kredensial yang Anda berikan salah");
    }
    const token = {
      role: check.dataValues.role,
      fullname: check.dataValues.fullname,
      email: check.dataValues.email,
      id: check.dataValues.id,
    };
    const accessToken = tokenEncode(token);

    await user.update({ token: accessToken }, {
        where: {
            id,
        }
    })
    
    res.status(201).json({
      status: "success",
      data: accessToken,
    });
  } catch (error) {
    next(error);
  }
};
