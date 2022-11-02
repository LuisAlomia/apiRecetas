const userIngredients = require("../models/users_ingredients.models");
const uuid = require("uuid");

const getAll = async () => {
  const data = await userIngredients.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await userIngredients.findOne({ where: { id } });
  return data;
};

const create = async (data) => {
  const newIngredient = await userIngredients.create({
    id: uuid.v4(),
    amount: data.amount,
    userId: data.userId,
    ingredientId: data.ingredientId,
  });
  return newIngredient;
};

const update = async (id, userId, data) => {
  const updateIngredient = await userIngredients.update(data, {
    where: { id, userId },
  });
  return updateIngredient;
};

const deleteCategory = async (userId, id) => {
  const data = await userIngredients.destroy({ where: { id, userId } });
  return data;
};

module.exports = { getAll, getOne, create, deleteCategory, update };
