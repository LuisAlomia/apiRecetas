const Types = require("../models/types.models");

const getAll = async () => {
  const data = await Types.findAll({});
  return data;
};

const getOne = async (typeId) => {
  const data = await Types.findOne({ where: { typeId } });
  return data;
};

const deleteType = async (typeId) => {
  const data = await Types.findOne({ where: { typeId } });
  return data;
};

const create = async (name) => {
  const newType = await Types.create({
    name,
  });
  return newType;
};

module.exports = { getAll, getOne, deleteType, create };
