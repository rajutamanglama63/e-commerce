const Product = require("./product");
const Catagory = require("./catagory");
const User = require("./user");
const ShippingAddress = require("./shippingAddress");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

User.hasOne(ShippingAddress);
ShippingAddress.belongsTo(User);

module.exports = {
  Product,
  Catagory,
  User,
  ShippingAddress,
};
