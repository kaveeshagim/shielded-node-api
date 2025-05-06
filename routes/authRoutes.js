const express = require("express");
const {
  registerUser,
  loginUser,
  getProtectedData,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { registerSchema, loginSchema } = require("../validators/authSchema");
const validate = require("../middleware/validate");
const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);
router.get("/protected", authMiddleware, getProtectedData);

module.exports = router;
