const router = require("express").Router();
const passport = require("passport");

const instructionControllers = require("./instructions.controllers");
const authRole = require("../middleware/authRole.middleware");
require("../middleware/authUser.middleware")(passport);
const {
  validateCreateInstruction,
  validateUpdateInstruction,
} = require("../validations/validate");

const authUser = passport.authenticate("jwt", { session: false });

router
  .route("/")
  .get(instructionControllers.getAll)
  .post(
    validateCreateInstruction,
    authUser,
    authRole,
    instructionControllers.create
  );

router
  .route("/:instruction_id")
  .get(instructionControllers.getOne)
  .delete(authUser, authRole, instructionControllers.deleteCategory)
  .patch(
    validateUpdateInstruction,
    authUser,
    authRole,
    instructionControllers.update
  );

module.exports = router;
