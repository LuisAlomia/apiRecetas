const router = require("express").Router();
const passport = require("passport");

const categoryControllers = require("./categories.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);
const { validateCreateCategory } = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(categoryControllers.getAll)
  .post(validateCreateCategory, authUser, authRole, categoryControllers.create);

router
  .route("/:category_id")
  .get(categoryControllers.getOne)
  .delete(authUser, authRole, categoryControllers.deleteCategory);

module.exports = router;
