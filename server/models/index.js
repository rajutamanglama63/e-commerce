const Product = require("./product");
const Catagory = require("./catagory");
const User = require("./user");
const ShippingAddress = require("./shippingAddress");
const OrderHistory = require("./orderHistory");
const Cart = require("./cart");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

User.hasOne(ShippingAddress);
ShippingAddress.belongsTo(User);

// User.hasMany(Product);
// Product.belongsTo(User);

Cart.hasMany(Product);
Product.belongsTo(Cart);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(OrderHistory);
OrderHistory.belongsTo(User);

module.exports = {
  Product,
  Catagory,
  User,
  ShippingAddress,
  Cart,
  OrderHistory,
};
