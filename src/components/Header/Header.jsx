import React, { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styles";
import { Link } from "react-router-dom";
import { fetchArticles, getCurrentDate } from "../../api";

const Title = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("US", "");
      const date = await getCurrentDate();
      setDate(date);
    };

    getArticles();
  }, []);

  const handleClick = (e) => {
    const input = e.target.id;
    console.log(input);
    fetchArticles("us", input);
  };

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
          <h4>current weather</h4>
        </div>

        <div className="categories">
          <Link to="/business">
            <button onClick={handleClick} id="business">
              business
            </button>
          </Link>
          <Link to="/et">
            <button onClick={handleClick} id="entertainment">
              entertainment
            </button>
          </Link>
          <Link to="/general">
            <button onClick={handleClick} id="general">
              general
            </button>
          </Link>
          <Link to="/health">
            <button onClick={handleClick} id="health">
              health
            </button>
          </Link>
          <Link to="/science">
            <button onClick={handleClick} id="sciences">
              science
            </button>
          </Link>
          <Link to="/sports">
            <button onClick={handleClick} id="sports">
              sports
            </button>
          </Link>
          <Link to="/tech">
            <button onClick={handleClick} id="technology">
              technology
            </button>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Title;
