const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    specification: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_publicId: {
      type: DataTypes.TEXT,
    },
    img_url: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    underscored: false,
    timestamps: false,
    modelName: "product",
  }
);

module.exports = Product;
