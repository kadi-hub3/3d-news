import React, { useState, useEffect } from "react";
import Headline from "../HeadLine/Headline";
import { StyledBar } from "./SearchBar.styles";
import { fetchSpecificArticles } from "../../api";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetchSpecificArticles(query);
  //     setArticles(response);
  //   };
  //   getData();
  // }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <StyledBar>
      <div>
        <div className="search-outer">
          <form role="search" method="get" className="searchform">
            <input
              type="search"
              onChange={handleChange}
              placeholder="Type any keyword"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <ul className="articles-fetched">
          {articles.map((article, id) => {
            return (
              <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                <Headline
                  title={article.title}
                  author={article.author}
                  description={article.description}
                  content={article.content}
                  image={article.urlToImage}
                  authorImg={article.urlToImage}
                  authorProfession="Reporter"
                />
              </a>
            );
          })}
        </ul>
      </div>
    </StyledBar>
  );
};

export default SearchBar;
