const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("orderHistory", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderStatus: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    }),
      await queryInterface.createTable("users", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        lastName: {
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
        isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      });
    await queryInterface.addColumn("orderHistory", "users", {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "orderHistory", key: "id" },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("orderHistory");
    await queryInterface.dropTable("users");
  },
};
