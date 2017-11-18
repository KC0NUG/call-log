const router = require("express").Router();
const callsController = require("../../controllers/callsController");

// Matches with "/api/calls"
router.route("/")
  .get(callsController.findAll)
  .post(callsController.create);

// Matches with "/api/calls/:id"
router
  .route("/:id")
  .get(callsController.findById)
  .put(callsController.update)
  .delete(callsController.remove);

module.exports = router;
