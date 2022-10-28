const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Ingredients = require("./ingredients.models");
const Users = require("./users.model");

const UserIngredients = dbSequelize.define("user_ingredients", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "ingredient_id",
    references: {
      key: "id",
      model: Ingredients,
    },
  },
});

module.exports = UserIngredients;
