const router = require("express").Router();
const passport = require("passport");

const ingredientControllers = require("./ingredients.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);
const {
  validateCreateIngredient,
  validateUpdateIngredient,
} = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(ingredientControllers.getAll)
  .post(
    validateCreateIngredient,
    authUser,
    authRole,
    ingredientControllers.create
  );

router
  .route("/:ingredient_id")
  .get(ingredientControllers.getOne)
  .delete(authUser, authRole, ingredientControllers.deleteCategory)
  .patch(
    validateUpdateIngredient,
    authUser,
    authRole,
    ingredientControllers.update
  );

module.exports = router;
