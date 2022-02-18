const { Router } = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");
const router = Router();

// Create
// Read
router.route("/").get(getGoals).post(setGoal);

// Update
// Delete
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
