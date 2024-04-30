import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import API_BASE_URL from "../../api/config";
import { getAuthFromLocalStorage } from "../utils/authUtils";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const auth = getAuthFromLocalStorage();
      const response = await axios.get(`${API_BASE_URL}/api/weather`, {
        params: { city },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${auth.username}:${auth.password}`),
        },
      });

      if (response.status === 200) {
        setWeatherData(response.data);
        toast.success(`Weather data retrieved for ${city}`, {
          position: "top-center",
        });
      } else {
        throw new Error(response.data.error);
      }
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
    e.preventDefault(); // Prevent default form submission behavior
    if (!city) {
      setError("City is required");
    } else {
      fetchWeatherData();
    }
  };

  return (
    <div className="sm:min-w-screen md:min-w-60 min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-2/4 overflow-hidden">
        <div className="px-6 py-4">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">WEATHER SEARCH</h1>
            <p>Found current weather of any city in the world</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="bg-gray-200 focus:outline-none focus:bg-white border border-gray-400 
                rounded py-2 px-4 block w-full appearance-none leading-normal mr-4"
              />
              <button
                className="bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={fetchWeatherData}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0116 12h4zm-2 5.291a7.962 7.962 0 01-3 2.647V24c3.627 0 9.001-5.373 9.001-12h-4z"
                    ></path>
                  </svg>
                ) : (
                  "Search"
                )}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
        {weatherData && weatherData.main && (
          <div className="px-6 py-4 bg-indigo-500 text-white font-thin">
            <h2 className="text-xl mt-4">
              Weather for {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div className="flex justify-between ">
              <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className="h-12 w-12"
              />
            </div>
            <div className="mt-2">
              <p>Humidity: {weatherData.main.humidity}</p>
              <p>Description: {weatherData.weather[0].description}</p>
            </div>
          </div>
        )}
        {weatherData && !weatherData.main && (
          <div className="px-6 py-4">
            <p>No weather data found for {city}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
