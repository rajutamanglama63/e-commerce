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
    await queryInterface.createTable("orderDetails", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_Id: {
        type: DataTypes.INTEGER,
        references: { model: "orders", key: "id" },
      },
      product_Id: {
        type: DataTypes.INTEGER,
        references: { model: "products", key: "id" },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.addColumn("orders", "product_Id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "products", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("orders");
    await queryInterface.dropTable("products");
  },
};
