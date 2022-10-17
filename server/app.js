const express = require("express");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const messagesRouter = require("./controllers/messagesRouter");
const productsRouter = require("./controllers/productsRouter");
const catagoryRouter = require("./controllers/catagoryRouter");
const cartRouter = require("./controllers/cartRouter");
const orderRouter = require("./controllers/orderRouter");
const shippingAddressRouter = require("./controllers/shippingAddressRouter");
const userRouter = require("./controllers/user");

const middleware = require("./utils/middleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(middleware.userExtractor);

app.use("/api/messages", messagesRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/catagories", catagoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/shipping_address", shippingAddressRouter);

app.use(middleware.errorHandler);
app.use(middleware.unKnownEndPoint);

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = app;
