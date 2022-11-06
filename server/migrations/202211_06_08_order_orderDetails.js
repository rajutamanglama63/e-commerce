const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("my_order_details", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      my_order_id: {
        type: DataTypes.INTEGER,
        references: { model: "my_orders", key: "id" },
      },
      product_id: {
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
    await queryInterface.dropTable("my_order_details");
  },
};
