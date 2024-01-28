const User = require("../models/user.modul.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const saltRounds = 10;
const signup = async (req, res) => {
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

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return res.status(403).json({
        msg: "Email not found",
      });
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword)
      return res.status(401).json({
        msg: "Wrong credentials",
      });
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashPassword, ...rest } = validUser._doc; // helps to remove password so that no one can findout
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, signin };
