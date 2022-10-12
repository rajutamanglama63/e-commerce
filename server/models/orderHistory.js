const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class OrderHistory extends Model {}

OrderHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderStatus: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "orderHistory",
  }
);

module.exports = OrderHistory;
