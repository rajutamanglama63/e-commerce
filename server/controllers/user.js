const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ msg: "All fields are required!" });
    }

    if (password.length < 3) {
      res.status(400).json({ msg: "Your password is too weak." });
    }

    const userExist = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userExist) {
      res.status(400).json({ msg: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

module.exports = router;
