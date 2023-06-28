const router = require("express").Router();

const {
  registerUser,
  //   loginUser,
  //   currentUser,
} = require("../controllers/userController");
// const validateToken = require('../')

router.post("/register", registerUser);
// router.post("/login");
// router.post("/current");

module.exports = router;
