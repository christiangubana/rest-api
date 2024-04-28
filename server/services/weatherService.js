const axios = require("axios");

// Function to fetch weather data from the third-party API
async function getWeatherData(city) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    // Check for specific error response from OpenWeatherMap API
    if (error.response && error.response.data) {
      const { cod, message } = error.response.data;
      return { error: message, code: cod };
    } else {
      // Handle other types of errors
      console.error(error);
      return { error: "Internal Server Error", code: 500 };
    }
  }
}

module.exports = { getWeatherData };
