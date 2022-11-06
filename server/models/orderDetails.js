const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class OrderDetails extends Model {}

OrderDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    myOrderId: {
      type: DataTypes.INTEGER,
      references: { model: "my_orders", key: "id" },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: { model: "products", key: "id" },
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "myOrderDetail",
  }
);

module.exports = OrderDetails;
