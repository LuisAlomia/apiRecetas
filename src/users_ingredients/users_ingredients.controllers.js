const userIngredientServices = require("./users_ingredients.services");

const getAll = (_req, resp) => {
  userIngredientServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const ingredientId = req.params.ingredient_Id;

  userIngredientServices
    .getOne(ingredientId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const ingredientId = req.params.ingredient_Id;
  const userId = req.user.id;

  userIngredientServices
    .deleteCategory(userId, ingredientId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const ingredientId = req.params.ingredient_Id;
  const userId = req.user.id;
  const { amount } = req.body;

  userIngredientServices
    .create({ amount, userId, ingredientId })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const ingredientId = req.params.ingredient_Id;
  const userId = req.user.id;
  const { amount } = req.body;

  userIngredientServices
    .update(ingredientId, userId, { amount })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Updated` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteCategory, create, update };
