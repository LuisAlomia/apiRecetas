const router = require("express").Router();
const passport = require("passport");

const recipeControllers = require("./recipes.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);
const {
  validateCreateRecipes,
  validateUpdateRecipes,
} = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(recipeControllers.getAll)
  .post(validateCreateRecipes, authUser, authRole, recipeControllers.create);

router
  .route("/:recipe_id")
  .get(recipeControllers.getOne)
  .delete(authUser, authRole, recipeControllers.deleteCategory)
  .patch(validateUpdateRecipes, authUser, authRole, recipeControllers.update);

module.exports = router;
