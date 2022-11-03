const recipesServices = require("./recipes.services");

const getAll = (_req, resp) => {
  recipesServices
    .getAll()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getOne = (req, resp) => {
  const recipeId = req.params.recipe_id;

  recipesServices
    .getOne(recipeId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const deleteCategory = (req, resp) => {
  const recipeId = req.params.recipe_id;

  recipesServices
    .deleteCategory(recipeId)
    .then((data) => {
      data
        ? resp.status(204).json(data)
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const create = (req, resp) => {
  const userId = req.user.id;
  const { title, description, urlImg, time, portions, categoryId, origin } =
    req.body;

  recipesServices
    .create({
      title,
      description,
      urlImg,
      time,
      portions,
      userId,
      categoryId,
      origin,
    })
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const update = (req, resp) => {
  const recipeId = req.params.recipe_id;
  const { title, description, urlImg, time, portions, categoryId, origin } =
    req.body;

  recipesServices
    .update(recipeId, {
      title,
      description,
      urlImg,
      time,
      portions,
      categoryId,
      origin,
    })
    .then((data) => {
      data[0]
        ? resp.status(200).json({ message: `Updated` })
        : resp.status(404).json({ message: `Invalid ID` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

const getMyRecipes = (req, resp) => {
  const userId = req.user.id;

  recipesServices
    .getMyRecipes(userId)
    .then((data) => {
      data
        ? resp.status(200).json(data)
        : resp.status(404).json({ message: `Not Recipes Disponebles` });
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

module.exports = {
  getAll,
  getOne,
  deleteCategory,
  create,
  update,
  getMyRecipes,
};
