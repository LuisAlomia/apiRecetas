const router = require("express").Router();
const typeControllers = require("./types.controllers");
const authRole = require("../middleware/authRole.middleware");
const passport = require("passport");
require("../middleware/authUser.middleware")(passport);
const { validateCreateType } = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(typeControllers.getAll)
  .post(validateCreateType, authUser, authRole, typeControllers.create);

router
  .route("/:type_id")
  .get(typeControllers.getOne)
  .delete(authUser, authRole, typeControllers.deleteType);

module.exports = router;
