import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  const weatherIcon = () => {
    switch (data.weather[0].main) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Clouds':
        return <WiCloudy />;
      case 'Rain':
        return <WiRain />;
      case 'Snow':
        return <WiSnow />;
      default:
        return null;
    }
  };

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <div className="weather-icon">{weatherIcon()}</div>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default CurrentWeather;