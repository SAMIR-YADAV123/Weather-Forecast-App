import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';
import moment from 'moment';

import './Forecast.css';

const Forecast = ({ data }) => {
  const weatherIcon = (weather) => {
    switch (weather.main) {
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
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      {data.map((item, index) => (
        <div className="forecast-item" key={index}>
          {/* <p>{moment(item.dt_txt).format('dddd')}</p> */}
          <p>{moment(item.dt * 1000).format('dddd')}</p>
          {/* <p>{new Date(item.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' })}</p> */}
          <div className="weather-icon">{weatherIcon(item.weather[0])}</div>
          <p>{item.weather[0].description}</p>
          <p>Temperature: {Math.round(item.main.temp - 273.15)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;