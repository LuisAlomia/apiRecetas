const router = require("express").Router();
const passport = require("passport");

const recipesIngredientControllers = require("./recipes_ingredients.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);
const {
  validateCreateRecipesIngredient,
  validateUpdateRecipesIngredient,
} = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(recipesIngredientControllers.getAll)
  .post(
    validateCreateRecipesIngredient,
    authUser,
    authRole,
    recipesIngredientControllers.create
  );

router
  .route("/:recipes_ingredient_id")
  .get(recipesIngredientControllers.getOne)
  .delete(authUser, authRole, recipesIngredientControllers.deleteCategory)
  .patch(
    validateUpdateRecipesIngredient,
    authUser,
    authRole,
    recipesIngredientControllers.update
  );

module.exports = router;
