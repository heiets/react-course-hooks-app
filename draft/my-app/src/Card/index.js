import React from 'react';
import { useWeather } from '../hooks/useWeather';

import '../App.css';

export const Card = ({ cityName }) => {
    const data = useWeather({ cityName });
    if (!data) return null;
    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;
    return (
        <div className="Card">
            <div className="MainInfo">
                <img className="Icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"></img>
                <div className="Title">{name}</div>
                <div className="Description">{description}</div>
                <div className="Temperature">{temp.toFixed()}</div>
            </div>
            <div className="Information">
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    )
};
