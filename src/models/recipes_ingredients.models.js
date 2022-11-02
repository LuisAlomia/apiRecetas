const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Ingredients = require("./ingredients.models");
const Recipes = require("./recipes.models");

const RecipesIngredients = dbSequelize.define("recipes_ingredients", {
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
  recipeId: {
    type: DataTypes.UUID,
    field: "recipe_id",
    references: {
      key: "id",
      model: Recipes,
    },
  },
  ingredientId: {
    type: DataTypes.UUID,
    field: "ingredient_id",
    references: {
      key: "id",
      model: Ingredients,
    },
  },
});

module.exports = RecipesIngredients;
