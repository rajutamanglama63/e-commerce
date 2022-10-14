const express = require("express");
const ShoppingCart = require("../models/shoppingCart");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, products, users } = req.body;

    const newCartData = await ShoppingCart.create({
      quantity,
      products,
      users,
    });

    res.status(200).json({ newCartData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
