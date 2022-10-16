const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
// const Cart = require("../models/cart");
// const Product = require("../models/product");
// const User = require("../models/user");

const { Cart, Product, User } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, productId } = req.body;

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
      product_id: productId,
      user_id: user.id,
    });

    res.status(200).json({ newCartData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
