const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.route("/me").get(protect, getUser).delete(protect, deleteUser);

module.exports = router;
