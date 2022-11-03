const Recipes = require("../models/recipes.models");
const uuid = require("uuid");
const Users = require("../models/users.model.js");
const Instructions = require("../models/instructions.models.js");
const Categories = require("../models/categories.models.js");
const RecipesIngredients = require("../models/recipes_ingredients.models.js");
const Types = require("../models/types.models.js");
const Ingredients = require("../models/ingredients.models.js");
const UsersIngredients = require("../models/users_ingredients.models");
const { Op } = require("sequelize");

const getAll = async () => {
  const data = await Recipes.findAll({
    attributes: {
      exclude: ["userId", "categoryId", "updatedAt", "createdAt"],
    },
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "username", "email"],
      },
      {
        model: Instructions,
        attributes: {
          exclude: ["id", "recipeId", "updatedAt", "createdAt"],
        },
      },
      {
        model: RecipesIngredients,
        attributes: ["amount"],
        include: {
          model: Ingredients,
          attributes: ["name"],
          include: {
            model: Types,
          },
        },
      },
    ],
  });
  return data;
};

const getOne = async (id) => {
  const data = await Recipes.findOne({
    where: { id },

    attributes: {
      exclude: ["userId", "categoryId", "updatedAt", "createdAt"],
    },
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "username", "email"],
      },
      {
        model: Instructions,
        attributes: {
          exclude: ["id", "recipeId", "updatedAt", "createdAt"],
        },
      },
      {
        model: RecipesIngredients,
        attributes: ["amount"],
        include: {
          model: Ingredients,
          attributes: ["name"],
          include: {
            model: Types,
          },
        },
      },
    ],
  });
  return data;
};

const create = async (data) => {
  const newRecipes = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    userId: data.userId,
    categoryId: data.categoryId,
    origin: data.origin,
    likes: data.likes,
  });
  return newRecipes;
};

const update = async (id, data) => {
  const updateRecipes = await Recipes.update(data, { where: { id } });
  return updateRecipes;
};

const deleteCategory = async (id) => {
  const data = await Recipes.destroy({ where: { id } });
  return data;
};

//optiene las recetas del que puede hacer el usuario segun sus ingredientes
const getMyRecipes = async (userId) => {
  //optener todos los ingredientes del usuario
  const userIngredient = await UsersIngredients.findAll({
    where: { userId },
    attributes: ["ingredientId"],
  });

  //filtra para traer solo los ingredientes
  const filterIngredients = userIngredient.map((item) => item.ingredientId);

  //optener todos los ingredientes de la receta segun los ingredientes del usuario
  const recipesIngredient = await RecipesIngredients.findAll({
    where: {
      ingredientId: {
        [Op.in]: filterIngredients,
      },
    },
  });

  const filterRecipes = recipesIngredient.map((item) => item.recipeId);

  //optener las recetas disponibles para el usuario
  const data = await Recipes.findAll({
    where: {
      id: {
        [Op.in]: filterRecipes,
      },
    },
  });

  return data;
};

/* getMyRecipes("f813f6dc-48d1-4fb2-ae93-d41120d485df")
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err)); */

module.exports = {
  getAll,
  getOne,
  create,
  deleteCategory,
  update,
  getMyRecipes,
};
