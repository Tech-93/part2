import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather({capital}){
    const [weather, setWeather] = useState({});
 
    const hook = () => {
        axios
        .get('http://api.weatherstack.com/current?access_key=97b2850de8443c0e9df1df140f0c6f82&query=' + capital)
        .then(response => {
            setWeather(response.data)
        })
    }
 
    useEffect(hook, []);
 
    if (!weather) {
        return ('<p>Loading weather...</p>');
    } else {
        return(
        <div>
            <h2 > Weather in {weather ? weather.location ? weather.location.name : '' : ''}</h2>
            <p>temperature: {weather.current ? weather.current.temperature : ''} Celcius </p>
            <img src={weather ? weather.current ? weather.current.weather_icons : '' : '' } alt='weathericon'  />
            <p>wind: {weather ? weather.current ?weather.current.wind_speed : '' : '' } kph direction {weather ? weather.current ? weather.current.wind_dir : '' : '' }  </p>
        </div>
        )
    }
}
 
export default Weather