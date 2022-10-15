const express = require("express");
const Cart = require("../models/cart");
const Product = require("../models/product");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, product_id } = req.body;

    const product_item = await Product.findByPk(product_id);

    const newCartData = await Cart.create({
      quantity,
      product_id: product_item,
      user_id: req.decodedToken.id,
    });

    res.status(200).json({ newCartData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
