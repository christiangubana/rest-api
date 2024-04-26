// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

// GET: http://localhost:8080/users
router.get("/", userController.getAllUsers);

// POST: http://localhost:8080/users
router.post("/add", userController.addUser);

module.exports = router;
