const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
// const Cart = require("../models/cart");
// const Product = require("../models/product");
// const User = require("../models/user");

const { Cart, Product, User } = require("../models");
const { findAll } = require("../models/product");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, productId } = req.body;
    // console.log(quantity, productId);

    // const product_item = await Product.findByPk(productId);

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const newCartData = await Cart.create({
      quantity,
      productId,
      userId: user.id,
    });

    res.status(200).json({ newCartData });
  } catch (error) {
    next(error);
    // console.log(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCartItems = await Cart.findAll({
      include: {
        model: User,
        attributes: ["firstName"],
      },
      include: {
        model: Product,
        attributes: ["productName"],
      },
    });

    res.status(200).json({ allCartItems });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
