const recipesIngredientServices = require("./recipes_ingredients.services");

const getAll = (_req, resp) => {
  recipesIngredientServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const recipesIngredId = req.params.recipes_ingredient_id;

  recipesIngredientServices
    .getOne(recipesIngredId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const recipesIngredId = req.params.recipes_ingredient_id;

  recipesIngredientServices
    .deleteCategory(recipesIngredId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const { amount, recipeId, ingredientId } = req.body;

  recipesIngredientServices
    .create({ amount, recipeId, ingredientId })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const recipesIngredId = req.params.recipes_ingredient_id;
  const { amount, recipeId, ingredientId } = req.body;

  recipesIngredientServices
    .update(recipesIngredId, { amount, recipeId, ingredientId })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Updated` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = { getAll, getOne, deleteCategory, create, update };
