const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class ShippingAddress extends Model {}

ShippingAddress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    place: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false,
    timestamps: false,
    modelName: "sippingAddress",
  }
);

module.exports = ShippingAddress;
