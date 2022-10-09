const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Catagory extends Model {}

Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    catagory_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "catagory",
  }
);

module.exports = Catagory;
