const express = require("express");
const cors = require("cors");

const userRoutes = require("./users/user.routes");
const authRoutes = require("./auth/auth.routes");
const categorieRoutes = require("./categories/categories.routes");
const typeRoutes = require("./types/types.routes");
const ingredientRoutes = require("./ingredients/ingredients.routes");
const instructionRoutes = require("./instructions/instructions.routes");
const recipesIngredientRoutes = require("./recipes_ingredients/recipes_ingredients.routes");
const recipeRoutes = require("./recipes/recipes.routes");

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categorieRoutes);
app.use("/api/v1/types", typeRoutes);
app.use("/api/v1/ingredients", ingredientRoutes);
app.use("/api/v1/instructions", instructionRoutes);
app.use("/api/v1/recipes_ingredients", recipesIngredientRoutes);
app.use("/api/v1/recipes", recipeRoutes);

module.exports = app;
