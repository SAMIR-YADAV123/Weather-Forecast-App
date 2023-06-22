import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';


function App() {
  
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'e81e6a3a591d68de5546c5af78d47b90';

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data. can you please Once check the city name written correctly or not');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearch={handleSearch}
      />
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div>
          <CurrentWeather data={weatherData.list[0]} />
          <Forecast data={weatherData.list.slice(1, 6)} />
        </div>
      )}
    </div>
  );
}

export default App;