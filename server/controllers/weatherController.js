// controllers/weatherController.js
// Assuming you have a function to fetch weather data from an external API
const weatherService = require("../services/weatherService");

exports.getWeather = async (req, res) => {
  try {
    // Call the function to fetch weather data
    const weatherData = await weatherService.fetchWeather();
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
