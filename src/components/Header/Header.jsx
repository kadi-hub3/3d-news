import React, { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styles";
import { Link } from "react-router-dom";
import { fetchArticles, getCurrentDate } from "../../api";
import WeatherIcon from "../Weather/WeatherIcon";
import SearchBar from "../SearchBar/SearchBar";

const Title = () => {
  const [date, setDate] = useState("");
  const [query, setQuery] = useState("kim");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("US", "", query);
      const date = await getCurrentDate();
      setDate(date);
      setArticles(response);
    };

    getArticles();
  }, []);

  return (
    <StyledHeader>
      <div className="header">
        <div className="lingo">
          <button>U.S.</button>
          <button>FRANCE</button>
          <button>ESPAÑOL ar</button>
          <button>العربية ae</button>
        </div>
        <div className="title">
          <h4>{date}</h4>
          <Link to="/">
            <h1>THE LA TIMES</h1>
          </Link>
          <h4>
            <WeatherIcon />
          </h4>
        </div>
        <SearchBar />
        <div className="categories">
          <Link to="/business">
            <button id="business">business</button>
          </Link>
          <Link to="/et">
            <button id="entertainment">entertainment</button>
          </Link>
          <Link to="/general">
            <button id="general">general</button>
          </Link>
          <Link to="/health">
            <button id="health">health</button>
          </Link>
          <Link to="/science">
            <button id="sciences">science</button>
          </Link>
          <Link to="/sports">
            <button id="sports">sports</button>
          </Link>
          <Link to="/tech">
            <button id="technology">technology</button>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Title;
