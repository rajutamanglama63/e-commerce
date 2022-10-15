const express = require("express");
const Catagory = require("../models/catagory");
const Product = require("../models/product");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { catagory_name } = req.body;

    if (!catagory_name) {
      return res.status(400).json({ msg: "Please mention the catagory." });
    }

    const newCatagory = await Catagory.create({
      catagory_name,
    });

    res.status(200).json({ newCatagory });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCatagories = await Catagory.findAll({
      // include: {
      //   model: Product,
      //   attributes: ["product_name"],
      // },
    });

    res.status(200).json({ allCatagories });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
