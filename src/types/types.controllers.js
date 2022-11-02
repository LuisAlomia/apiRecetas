const typeServices = require("./types.services");

const getAll = (req, resp) => {
  typeServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const typeId = req.params.type_id;

  typeServices
    .getOne(typeId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteType = (req, resp) => {
  const typeId = req.params.type_id;

  typeServices
    .deleteType(typeId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const { name } = req.body;

  typeServices
    .create(name)
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, create, deleteType };
