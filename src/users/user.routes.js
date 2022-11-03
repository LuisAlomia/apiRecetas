const router = require("express").Router();
const passport = require("passport");
const recipesControllers = require("../recipes/recipes.controllers");
const userControllers = require("./user.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);

const authUser = passport.authenticate("jwt", { session: false });

router.get("/", userControllers.getAll);

router.get("/me", authUser, userControllers.getOneMyUser);

router.get("/me/my_recipes", authUser, recipesControllers.getMyRecipes);

router
  .route("/:id")
  .get(userControllers.getOne)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
