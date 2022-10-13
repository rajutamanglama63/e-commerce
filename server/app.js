const express = require("express");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const messagesRouter = require("./controllers/messagesRouter");
const productsRouter = require("./controllers/productsRouter");
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

app.use(middleware.tokenExtractor);

app.use("/api/messages", messagesRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);

app.use(middleware.errorHandler);
app.use(middleware.unKnownEndPoint);

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = app;
