const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const { Orders, Product, OrderDetails, User } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const order = await Orders.findOne({
      where: {
        status: "pending",
        idUser: user.id,
      },
    });

    if (order) {
      const orderedItemInCart = await OrderDetails.create({
        productId: productId,
        myOrderId: order.id,
        quantity: order.quantity,
      });
      res.status(201).json({ orderedItemInCart });
    } else {
      const newOrder = await Orders.create({
        quantity,
        idUser: user.id,
      });
      const orderedItemInCart = await OrderDetails.create({
        productId,
        myOrderId: newOrder.id,
        quantity: newOrder.quantity,
      });
      res.status(201).json({ orderedItemInCart });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const items = await Orders.findOne({
      where: {
        status: "pending",
        idUser: user.id,
      },
      attributes: { exclude: ["idUser"] },
      include: [
        {
          model: Product,
          attributes: ["productName", "price", "imgUrl"],
          through: ["productId", "quantity"],
        },
      ],
    });

    res.status(200).json({ items });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
