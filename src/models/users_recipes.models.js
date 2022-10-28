const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Recipes = require("./recipes.models");
const Users = require("./users.model");

const userRecipes = dbSequelize.define("user_recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: id,
      model: Users,
    },
  },
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "recipe_id",
    references: {
      key: id,
      model: Recipes,
    },
  },
});

module.exports = userRecipes;
