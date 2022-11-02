const recipesIngredients = require("../models/recipes_ingredients.models");
const uuid = require("uuid");

const getAll = async () => {
  const data = await recipesIngredients.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await recipesIngredients.findOne({ where: { id } });
  return data;
};

const create = async (data) => {
  const newRecipesIngred = await recipesIngredients.create({
    id: uuid.v4(),
    amount: data.amount,
    recipeId: data.recipeId,
    ingredientId: data.ingredientId,
  });
  return newRecipesIngred;
};

const update = async (id, data) => {
  const updateRecipesIngred = await recipesIngredients.update(data, {
    where: { id },
  });
  return updateRecipesIngred;
};

const deleteCategory = async (id) => {
  const data = await recipesIngredients.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getOne, create, deleteCategory, update };
