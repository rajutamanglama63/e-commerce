const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
// const Cart = require("../models/cart");
// const Product = require("../models/product");
// const User = require("../models/user");

const { User, Orders, Product } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { quantity, address } = req.body;

    // const product_item = await Product.findByPk(productId);

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const user = await User.findByPk(decodedUser.id);

    if (!user) {
      return res.status(401).json({ err: "token missing or invalid." });
    }

    const newOrderData = await Orders.create({
      quantity,
      address,
      userId: user.id,
    });

    res.status(200).json({ newOrderData });
  } catch (error) {
    next(error);
    // console.log(error);
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

    const orderedProduct = await Orders.findOne({
      where: {
        idUser: user.id,
      },
      include: [
        {
          model: Product,
          attributes: ["productName", "price", "imgUrl"],
          through: ["productId", "quantity"],
        },
      ],
    });

    res.status(200).json({ orderedProduct });
  } catch (error) {
    next(error);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const allCartItems = await Cart.findAll({
//       include: {
//         model: User,
//         attributes: ["firstName"],
//       },
//     });

//     res.status(200).json({ allCartItems });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const allCartItems = await Cart.findAll({
//       include: {
//         model: User,
//         attributes: ["firstName"],
//       },
//     });

//     allCartItems.forEach((item) => {
//       if (item.userId.toString() !== req.params.id) {
//         return res
//           .status(500)
//           .json({ msg: "You've no item listed in your cart yet." });
//       } else if (item.userId.toString() === req.params.id) {
//         return res.status(200).json({ item });
//       }
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
