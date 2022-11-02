const Categories = require("../models/categories.models");

const getAll = async () => {
  const data = await Categories.findAll({});
  return data;
};

const getOne = async (id) => {
  const data = await Categories.findOne({ where: { id } });
  return data;
};

const create = async (name) => {
  const newCategory = await Categories.create({ name });
  return newCategory;
};

const deleteCategory = async (id) => {
  const data = await Categories.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getOne, create, deleteCategory };
