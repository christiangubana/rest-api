// routes/weatherRoutes.js
const express = require("express");
const router = express.Router();
const { fetchWeatherData } = require("../controllers/weatherController");

// Import the basicAuth middleware
const basicAuth = require("../middlewares/basicAuth");

// Middleware to apply Basic authentication to weather endpoint
router.use(basicAuth);

// Endpoint to fetch weather data
// GET: http://localhost:8080/api/weather?city=CapeTown
router.get("/weather", fetchWeatherData);
module.exports = router;
