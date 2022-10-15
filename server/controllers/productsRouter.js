const express = require("express");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const fs = require("fs");

const Product = require("../models/product");
const Catagory = require("../models/catagory");

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/upload", async (req, res, next) => {
  try {
    // const pic = req.files;
    // console.log(pic);

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded." });
    }

    const file = req.files.file;

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTem(file.tempFilePath);
      return res.status(400).json({ msg: "Invalid file format." });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      {
        folder: "electronics-shop",
      },
      async (err, result) => {
        if (err) throw err;

        removeTem(file.tempFilePath);

        res
          .status(200)
          .json({ publicId: result.public_id, url: result.secure_url });
      }
    );
  } catch (error) {
    next(error);
    res.status(500).json({ msg: error.message });
  }
});

const removeTem = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

router.post("/", async (req, res, next) => {
  const {
    price,
    product_name,
    specification,
    quantity,
    img_publicId,
    img_url,
    catagory_id,
  } = req.body;

  if (
    !price ||
    !product_name ||
    !specification ||
    !quantity ||
    !img_publicId ||
    !img_url
  ) {
    return res.status(400).json({ msg: "All fields are require!" });
  }

  const newProduct = await Product.create({
    price,
    product_name,
    specification,
    quantity,
    img_publicId,
    img_url,
    catagory_id,
  });

  res.status(200).json(newProduct);
});

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      // include: {
      //   model: Catagory,
      //   attributes: ["catagory_name"],
      // },
    });

    res.status(200).json({ allProducts });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
});

module.exports = router;
