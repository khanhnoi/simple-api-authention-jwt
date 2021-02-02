const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const User = require("./../models/User");

router.get("/", verify, async (req, res) => {
  const userExist = await User.findOne({ _id: req.user._id });
  if (!userExist) return res.status(400).send("User dont exist !!");
  res.send(`Welcome ${userExist.name}. Successful login`);
});

module.exports = router;
