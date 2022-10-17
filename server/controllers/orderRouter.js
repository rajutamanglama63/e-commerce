const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const { OrderHistory, User, Product } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { orderStatus, orderedProductId } = req.body;

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const newOrder = await OrderHistory.create({
      orderStatus,
      orderedProductId,
      userId: user.id,
    });

    res.status(200).json({ newOrder });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allOrders = await OrderHistory.findAll({
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    res.status(200).json({ allOrders });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const allOrders = await OrderHistory.findAll({
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    allOrders.forEach((order) => {
      // console.log(typeof order.userId);
      // console.log(typeof req.params.id);
      if (order.userId.toString() !== req.params.id) {
        return res.status(500).json({ msg: "You have no orders yet" });
      } else {
        return res.status(200).json({ order });
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
