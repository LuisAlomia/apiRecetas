const Ingredients = require("../models/ingredients.models");
const uuid = require("uuid");

const getAll = async () => {
  const data = await Ingredients.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await Ingredients.findOne({ where: { id } });
  return data;
};

const create = async (data) => {
  const newIngredient = await Ingredients.create({
    id: uuid.v4(),
    name: data.name,
    typeId: data.typeId,
    urlImg: data.urlImg,
  });
  return newIngredient;
};

const update = async (id, data) => {
  const updateIngredient = await Ingredients.update(data, { where: { id } });
  return updateIngredient;
};

const deleteCategory = async (id) => {
  const data = await Ingredients.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getOne, create, deleteCategory, update };
