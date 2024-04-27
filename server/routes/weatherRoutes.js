// routes/weatherRoutes.js
const express = require("express");
const router = express.Router();
const { fetchWeatherData } = require('../controllers/weatherController');

// Endpoint to fetch weather data
// GET: http://localhost:8080/api/weather?city=CapeTown
router.get('/weather', fetchWeatherData);
module.exports = router;
