const Recipes = require("../models/recipes.models");
const uuid = require("uuid");

const getAll = async () => {
  const data = await Recipes.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await Recipes.findOne({ where: { id } });
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

module.exports = { getAll, getOne, create, deleteCategory, update };
