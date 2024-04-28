const { getWeatherData } = require("../services/weatherService");

exports.fetchWeatherData = async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City name is required" });
    }

    // Call the function to fetch weather data
    const weatherData = await getWeatherData(city);

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
