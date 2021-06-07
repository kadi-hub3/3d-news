import React, { useState, useEffect } from "react";
import { fetchWeather, fetchLocation } from "../../api";
import { StyledWeather } from "./WeatherIcon.styles";

const WeatherIcon = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("london");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [location, setLocation] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetchWeather(city);
      setWeather(response);
      setTemp(response[0].temp);
      setMinTemp(response[0].temp_min);
      setMaxTemp(response[0].temp_max);
      setIcon(response[1][0].icon);
    };
    getWeather();
  }, [city]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      const locationn = await fetchLocation();
      setLocation(locationn);
      console.log(locationn);
    };
    getCurrentLocation();
  }, []);

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
