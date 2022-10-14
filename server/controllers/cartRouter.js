const express = require("express");
const Cart = require("../models/cart");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, product_id } = req.body;

    const newCartData = await Cart.create({
      quantity,
      product_id,
      user_id: req.decodedToken.id,
    });

    res.status(200).json({ newCartData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
