const Product = require("./product");
const Catagory = require("./catagory");

Catagory.hasMany(Product);
Product.belongsTo(Catagory);

module.exports = {
  Product,
  Catagory,
};
