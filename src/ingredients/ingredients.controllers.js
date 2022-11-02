const ingredientServices = require("./ingredients.services");

const getAll = (_req, resp) => {
  ingredientServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const ingedientId = req.params.ingredient_id;

  ingredientServices
    .getOne(ingedientId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const ingedientId = req.params.ingredient_id;

  ingredientServices
    .deleteCategory(ingedientId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const { name, typeId, urlImg } = req.body;

  ingredientServices
    .create({ name, typeId, urlImg })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const ingedientId = req.params.ingredient_id;
  const { name, typeId, urlImg } = req.body;

  ingredientServices
    .update(ingedientId, { name, typeId, urlImg })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Updated` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteCategory, create, update };
