const { check } = require("express-validator");
const validateResult = require("../middleware/validator.middleware");

const validateCreateCategory = [
  check("name").exists().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateType = [
  check("name").exists().notEmpty().trim().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateIngredient = [
  check("name").exists().notEmpty().isString(),
  check("typeId").exists().notEmpty().isNumeric(),
  check("urlImg").exists().notEmpty().isURL(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateUpdateIngredient = [
  check("name").optional().exists().notEmpty().isString(),
  check("typeId").optional().exists().notEmpty().isNumeric(),
  check("urlImg").optional().exists().notEmpty().isURL(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateInstruction = [
  check("step").exists().notEmpty().isNumeric(),
  check("recipeId").exists().notEmpty().isUUID(),
  check("description").exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateUpdateInstruction = [
  check("step").optional().exists().notEmpty().isNumeric(),
  check("recipeId").optional().exists().notEmpty().isUUID(),
  check("description").optional().exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateRecipesIngredient = [
  check("amount").exists().notEmpty().isString(),
  check("recipeId").exists().notEmpty().isUUID(),
  check("ingredientId").exists().notEmpty().isUUID(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateUpdateRecipesIngredient = [
  check("amount").optional().exists().notEmpty().isString(),
  check("recipeId").optional().exists().notEmpty().isUUID(),
  check("ingredientId").optional().exists().notEmpty().isUUID(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateUserIngredient = [
  check("amount").exists().exists().notEmpty().isString(),
  (req, resp, next) => validateResult(req, resp, next),
];

const validateCreateRecipes = [
  check("title").exists().notEmpty().isString(),
  check("description").exists().notEmpty().isString(),
  check("urlImg").exists().notEmpty().isURL(),
  check("time").exists().notEmpty().isNumeric(),
  check("portions").exists().notEmpty().isNumeric(),
  check("categoryId").exists().notEmpty().isNumeric(),
  check("origin").exists().notEmpty().isString(),
  (req, res, next) => validateResult(req, res, next),
];

const validateUpdateRecipes = [
  check("title").optional().notEmpty().isString(),
  check("description").optional().notEmpty().isString(),
  check("urlImg").optional().notEmpty().isURL(),
  check("time").optional().notEmpty().isNumeric(),
  check("portions").optional().notEmpty().isNumeric(),
  check("categoryId").optional().notEmpty().isNumeric(),
  check("origin").optional().notEmpty().isString(),
  (req, res, next) => validateResult(req, res, next),
];

module.exports = {
  validateCreateCategory,
  validateCreateType,
  validateCreateIngredient,
  validateUpdateIngredient,
  validateCreateInstruction,
  validateUpdateInstruction,
  validateCreateRecipesIngredient,
  validateUpdateRecipesIngredient,
  validateCreateUserIngredient,
  validateCreateRecipes,
  validateUpdateRecipes,
};
