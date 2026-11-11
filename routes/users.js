const router = require("express").Router();

const auth = require("../middlewares/auth");

const {
  createUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/users");

const { validateSignup, validateSignin } = require("../middlewares/validation");

router.post("/signup", validateSignup, createUser);

router.post("/signin", validateSignin, loginUser);

router.get("/users/me", auth, getCurrentUser);

module.exports = router;
