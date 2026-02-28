const express = require("express");
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

const router = express.Router();

// GET /api/users
router.get("/", auth, userController.getUsers);

// POST /api/users
router.post("/", userController.createUser);

module.exports = router;
