const User = require("../models/user.modul.js");
const bcrypt = require("bcrypt");
// const saltRounds = 10;
const singup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(403).json({
        msg: "email already exist",
      });
    }
    // const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashPassword;
    await User.create(req.body);
    res.status(201).json({
      msg: "register successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = singup;
