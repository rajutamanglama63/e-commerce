const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "shoppingCart",
  }
);

module.exports = ShoppingCart;
