const Instructions = require("../models/instructions.models");
const uuid = require("uuid");

const getAll = async () => {
  const data = await Instructions.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await Instructions.findOne({ where: { id } });
  return data;
};

const create = async (data) => {
  const newInstruction = await Instructions.create({
    id: uuid.v4(),
    step: data.step,
    recipeId: data.recipeId,
    description: data.description,
  });
  return newInstruction;
};

const update = async (id, data) => {
  const updateInstruction = await Instructions.update(data, { where: { id } });
  return updateInstruction;
};

const deleteCategory = async (id) => {
  const data = await Instructions.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getOne, create, deleteCategory, update };
