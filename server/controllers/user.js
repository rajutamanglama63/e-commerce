const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { SECRET } = require("../utils/config");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    if (password.length < 3) {
      return res.status(400).json({ msg: "Your password is too weak." });
    }

    const userExist = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userExist) {
      return res.status(400).json({ msg: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
    process.exit(1);
  }
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).json({ msg: "User doesn't exit!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const userForToken = {
      firstName: user.firstName,
      lastName: user.lastName,
      id: user._id,
    };

    const token = jwt.sign(userForToken, SECRET, { expiresIn: 60 * 60 });

    res.status(200).json({
      token,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } catch (error) {
    next(error);
    process.exit(1);
  }
});

module.exports = router;
