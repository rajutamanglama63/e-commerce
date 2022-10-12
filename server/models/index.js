const Product = require("./product");
const Catagory = require("./catagory");
const User = require("./user");
const ShippingAddress = require("./shippingAddress");
const ShoppingCart = require("./shoppingCart");
const OrderHistory = require("./orderHistory");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

User.hasOne(ShippingAddress);
ShippingAddress.belongsTo(User);

ShoppingCart.hasMany(Product);
Product.belongsTo(ShoppingCart);

User.hasOne(ShoppingCart);
ShoppingCart.belongsTo(User);

User.hasMany(OrderHistory);
OrderHistory.belongsTo(User);

module.exports = {
  Product,
  Catagory,
  User,
  ShippingAddress,
  ShoppingCart,
  OrderHistory,
};
