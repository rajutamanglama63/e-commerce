const Product = require("./product");
const Catagory = require("./catagory");
const User = require("./user");
const ShippingAddress = require("./shippingAddress");
const Orders = require("./orders");
const OrderDetails = require("./orderDetails");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

User.hasOne(ShippingAddress);
ShippingAddress.belongsTo(User);

Orders.belongsToMany(Product, { through: OrderDetails });
Product.belongsToMany(Orders, { through: OrderDetails });

module.exports = {
  Product,
  Catagory,
  User,
  ShippingAddress,
  Orders,
  OrderDetails,
};
