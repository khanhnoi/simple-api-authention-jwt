const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const { registerValidation, loginValidation } = require("./../validate");

router.get("/", (req, res) => {
  res.send("Đay là trang test API Authentication");
});

router.post("/register", async (req, res) => {
  //Let validate the data before we a user
  // console.log(req.body);
  const validation = registerValidation(req.body);
  // console.log("validation: ");
  // console.log(validation);
  const { value, error } = validation;
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  // console.log("emailExist");
  // console.log(emailExist);
  if (emailExist) return res.status(400).send("Email already exist !!");

  //hash the pasword
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    // res.status(400).json({
    //   msg: error,
    // });
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const validation = loginValidation(req.body);
  const { value, error } = validation;
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) return res.status(400).send("Email or password is wrong !!");
  //password is correct -- validPass is true or false
  const validPass = await bcrypt.compare(req.body.password, userExist.password);
  if (!validPass) return res.status(400).send("Invalid password !!");
  res.status(200).send("logged in !!");
});

module.exports = router;
