import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import API_BASE_URL from '../api/config';

const Weather = () => {
  const [city, setCity] = useState('');
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
          position: 'top-center',
        });
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      setError(error.message);
      const errorMessage = error.response?.data?.error || 'An error occurred';
      toast.error(errorMessage, {
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData} disabled={loading}>
        {loading ? 'Fetching Weather...' : 'Get Weather'}
      </button>
      {error && <p>{error}</p>}
      {weatherData && weatherData.main && (
        <div>
          <h2>Weather for {city}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* Add more weather data fields as needed */}
        </div>
      )}
      {weatherData && !weatherData.main && (
        <p>No weather data found for {city}</p>
      )}
    </div>
  );
};

export default Weather;
