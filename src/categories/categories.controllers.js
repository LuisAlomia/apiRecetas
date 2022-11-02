const categoryServices = require("./categories.services");

const getAll = (_req, resp) => {
  categoryServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const categoryId = req.params.category_id;

  categoryServices
    .getOne(categoryId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const categoryId = req.params.category_id;

  categoryServices
    .deleteCategory(categoryId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const { name } = req.body;

  categoryServices
    .create(name)
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteCategory, create };
