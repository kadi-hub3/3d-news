import React, { useState, useEffect } from "react";
import { fetchWeather } from "../../api";
import { StyledWeather } from "./WeatherIcon.styles";

const WeatherIcon = () => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetchWeather();
      setWeather(response);
      setTemp(response[0].temp);
      setMinTemp(response[0].temp_min);
      setMaxTemp(response[0].temp_max);
      setIcon(response[1][0].icon);
    };
    getWeather();
  }, []);

  const iconapi = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <StyledWeather>
      <div className="weather">
        <img src={iconapi} />
        <h4>{(temp - 273.15).toFixed(0)} °C</h4>
        <span className="min">{(minTemp - 273.15).toFixed(0)} °</span>
        <span>{(maxTemp - 273.15).toFixed(0)} °</span>
      </div>
    </StyledWeather>
  );
};

export default WeatherIcon;
