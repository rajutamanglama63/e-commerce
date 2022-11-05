const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class Orders extends Model {}

Orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      defaultValue: "pending",
    },
    address: {
      type: DataTypes.TEXT,
    },
    idUser: {
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "my_order",
  }
);

module.exports = Orders;
