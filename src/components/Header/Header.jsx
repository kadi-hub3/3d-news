import React, { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styles";
import { NavLink } from "react-router-dom";
import { getCurrentDate } from "../../api";
import WeatherIcon from "../Weather/WeatherIcon";
import SearchBar from "../SearchBar/SearchBar";

const Title = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const getDate = async () => {
      const date = await getCurrentDate();
      setDate(date);
    };

    getDate();
  }, []);

  return (
    <StyledHeader>
      <div className="header">
        <div className="lingo">
          <NavLink to="/3d-news/" activeClassName="active">
            U.S.
          </NavLink>
          <NavLink to="/3d-news/france" activeClassName="active">
            FRANCE
          </NavLink>
          <NavLink to="/3d-news/spain" activeClassName="active">
            ESPAÑA
          </NavLink>
          <NavLink to="/3d-news/ae" activeClassName="active">
            العربية
          </NavLink>
        </div>
        <div className="title">
          <h4>{date}</h4>
          <NavLink to="/3d-news">
            <h1>THE LA TIMES</h1>
          </NavLink>
          <h4>
            <WeatherIcon />
          </h4>
        </div>
        <SearchBar />
        <div className="categories">
          <NavLink to="/3d-news/business" activeClassName="active">
            business
          </NavLink>
          <NavLink to="/3d-news/et" activeClassName="active">
            entertainment
          </NavLink>
          <NavLink to="/3d-news/general" activeClassName="active">
            general
          </NavLink>
          <NavLink to="/3d-news/health" activeClassName="active">
            health
          </NavLink>
          <NavLink to="/3d-news/science" activeClassName="active">
            science
          </NavLink>
          <NavLink to="/3d-news/sports" activeClassName="active">
            sports
          </NavLink>
          <NavLink to="/3d-news/tech" activeClassName="active">
            technology
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Title;
