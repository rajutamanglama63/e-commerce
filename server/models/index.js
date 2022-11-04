const Product = require("./product");
const Catagory = require("./catagory");
const User = require("./user");
const Orders = require("./orders");
const OrderDetails = require("./orderDetails");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

Orders.belongsToMany(Product, { through: OrderDetails });
Product.belongsToMany(Orders, { through: OrderDetails });

module.exports = {
  Product,
  Catagory,
  User,
  Orders,
  OrderDetails,
};
