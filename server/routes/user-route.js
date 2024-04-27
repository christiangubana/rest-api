// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

// GET: http://localhost:8080/api
router.get("/", userController.getUser);

// POST: http://localhost:8080/api/add
router.post("/add", userController.addUser);

module.exports = router;
