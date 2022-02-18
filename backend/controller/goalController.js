const asyncHandler = require("express-async-handler");

/**
 * Get goals
 * @route GET /api/goals
 * @access private
 */
const getGoals = asynchandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});
/**
 * Set goal
 * @route POST /api/goals
 * @access private
 */
const setGoal = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }

  res.status(200).json({
    message: "Set goal",
  });
});
/**
 * Update goals
 * @route PUT /api/goals/:id
 * @access private
 */
const updateGoal = asynchandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});
/**
 * Delete goals
 * @route DELETE /api/goals/:id
 * @access private
 */
const deleteGoal = asynchandler(async (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
});

module.exports = {
  setGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};
