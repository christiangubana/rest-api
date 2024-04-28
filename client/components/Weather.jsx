import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import API_BASE_URL from "../api/config";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/weather`, {
        params: { city },
      });

      if (response.status === 200) {
        setWeatherData(response.data);
        toast.success(`Weather data retrieved for ${city}`, {
          position: "top-center",
        });
      } else {
        throw new Error(response.data.error);
      }
      console.log(response);
    } catch (error) {
      setError(error.message);
      const errorMessage = error.response?.data?.error || "An error occurred";
      toast.error(errorMessage, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!city) {
      setError("City is required");
    } else {
      fetchWeatherData();
    }
  };

  return (
    <div className="bg-red-500">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-gray-200 focus:outline-none focus:bg-white border border-gray-400 rounded py-2 px-4 block w-full appearance-none leading-normal"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {weatherData && weatherData.main && (
            <div>
              <h2>
                Weather for {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Huumidity: {weatherData.main.humidity}</p>
              <p>Description: {weatherData.weather[0].description}</p>
              <p>Country: {weatherData.sys.country}</p>
            </div>
          )}
          {weatherData && !weatherData.main && (
            <p>No weather data found for {city}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;
