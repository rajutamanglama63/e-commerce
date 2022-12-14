const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("products", {
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
      img_public_id: {
        type: DataTypes.TEXT,
      },
      img_url: {
        type: DataTypes.TEXT,
      },
      cart_id: {
        type: DataTypes.TEXT,
      },
    });
    await queryInterface.createTable("catagories", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      catagory_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    await queryInterface.addColumn("products", "catagory_id", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: "catagories", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("products");
    await queryInterface.dropTable("catagories");
  },
};
