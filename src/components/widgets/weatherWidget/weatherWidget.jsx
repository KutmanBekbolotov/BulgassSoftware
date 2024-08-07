import React, { useState, useEffect } from 'react';
import './weatherWidget.css'; 

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=6363200951683da75954f290fcc97cf0&units=metric`);
                const data = await response.json();
                if (response.ok) {
                    setWeatherData(data);
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError(error.message);
            }
        };
        fetchWeather();
    }, []);

    if (error) {
        return <div className="weather-widget error">{error}</div>;
    }

    if (!weatherData) {
        return <div className="weather-widget loading">Loading...</div>;
    }

    return (
        <div className="weather-widget">
            <div className="weather-widget__location">{weatherData.name}</div>
            <div className="weather-widget__temp">{Math.round(weatherData.main.temp)}°C</div>
            <div className="weather-widget__description">{weatherData.weather[0].description}</div>
            <div className="weather-widget__icon">
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description}
                />
            </div>
        </div>
    );
};

export default WeatherWidget;
