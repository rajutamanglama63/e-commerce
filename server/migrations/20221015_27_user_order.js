const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("order_histories", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_status: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ordered_product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }),
      await queryInterface.createTable("users", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        is_admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      });
    await queryInterface.addColumn("order_histories", "user_id", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("order_histories");
    await queryInterface.dropTable("users");
  },
};