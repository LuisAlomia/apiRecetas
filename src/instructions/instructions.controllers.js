const instructionServices = require("./instructions.services");

const getAll = (_req, resp) => {
  instructionServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const instructionId = req.params.instruction_id;

  instructionServices
    .getOne(instructionId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const instructionId = req.params.instruction_id;

  instructionServices
    .deleteCategory(instructionId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const { name, step, description, recipeId } = req.body;

  instructionServices
    .create({ step, description, recipeId })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const instructionId = req.params.instruction_id;
  const { name, step, description, recipeId } = req.body;

  instructionServices
    .update(instructionId, { step, description, recipeId })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Updated` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteCategory, create, update };
