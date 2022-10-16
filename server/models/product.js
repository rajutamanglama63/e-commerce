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
    productName: {
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
    imgPublicId: {
      type: DataTypes.TEXT,
    },
    imgUrl: {
      type: DataTypes.TEXT,
    },
    catagoryId: {
      type: DataTypes.INTEGER,
      references: { model: "catagories", key: "id" },
    },
    cartId: {
      type: DataTypes.INTEGER,
      references: { model: "carts", key: "id" },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "product",
  }
);

module.exports = Product;
