const express = require("express");
const Catagory = require("../models/catagory");

const router = express.Router();

router.post("/", async (res, req, next) => {
  try {
    const { catagory_name } = req.body;

    const newCatagory = await Catagory.create({
      catagory_name,
    });

    res.status(200).json({ newCatagory });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
