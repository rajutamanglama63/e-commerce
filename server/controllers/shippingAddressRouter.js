const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const { User, ShippingAddress } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { country, city, place } = req.body;

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser) {
      return res.status(401).json({ err: "token missing or invalid" });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid" });
    }

    const shippingAddress = await ShippingAddress.create({
      country,
      city,
      place,
      userId: user.id,
    });

    res.status(201).json({ shippingAddress });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const shippingAddress = await ShippingAddress.findAll({
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    res.status(200).json({ shippingAddress });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const shippingAddresses = await ShippingAddress.findAll({
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    shippingAddresses.forEach((address) => {
      if (address.userId.toString() === req.params.id) {
        return res.status(200).json({ address });
      } else {
        return res
          .status(500)
          .json({ msg: "Please update your shipping address." });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
