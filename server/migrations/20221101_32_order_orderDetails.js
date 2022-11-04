const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("orders", {
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
      },
      address: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
    });
    await queryInterface.createTable("order_Details", {
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
    // await queryInterface.addColumn("orders", "product_Id", {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: { model: "products", key: "id" },
    // });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("orders");
    await queryInterface.dropTable("products");
  },
};
