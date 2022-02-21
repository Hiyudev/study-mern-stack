const { Router } = require("express");
const router = Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleware");

// Create
// Read
router.route("/").get(protect, getGoals).post(protect, setGoal);

// Update
// Delete
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
