const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Recipes = require("./recipes.models");

const Instructions = dbSequelize.define("instructions", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  step: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "recipe_id",
    references: {
      key: "id",
      model: Recipes,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Instructions;
