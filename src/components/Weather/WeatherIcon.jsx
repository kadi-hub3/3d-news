import React, { useState, useEffect } from "react";
import { fetchWeather, fetchLocation } from "../../api";
import { StyledWeather } from "./WeatherIcon.styles";

const WeatherIcon = () => {
  const [city, setCity] = useState("london");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  useEffect(() => {
    const getCurrentLocation = async () => {
      const city = await fetchLocation();
      setCity(city);
      console.log(city);
    };
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetchWeather(city);
      setTemp(response[0].temp);
      setMinTemp(response[0].temp_min);
      setMaxTemp(response[0].temp_max);
      setIcon(response[1][0].icon);
    };
    getWeather();
  }, [city]);

  const iconapi = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <StyledWeather>
      <div className="weather">
        <img src={iconapi} alt="" />
        <h4>{(temp - 273.15).toFixed(0)} °C</h4>
        <h5>{(maxTemp - 273.15).toFixed(0)} °</h5>
        <h5 className="min">{(minTemp - 273.15).toFixed(0)} °</h5>
      </div>
    </StyledWeather>
  );
};

export default WeatherIcon;
