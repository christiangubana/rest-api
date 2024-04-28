// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

const basicAuth = require("../middlewares/basicAuth");

// Middleware to apply Basic authentication to todos endpoints
router.use("/user", basicAuth);

// GET: http://localhost:8080/api
router.get("/user", userController.getUser);

// POST: http://localhost:8080/api/add
router.post("/add", userController.addUser);

module.exports = router;
