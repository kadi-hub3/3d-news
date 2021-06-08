import React, { useState, useEffect } from "react";
import { StyledBar } from "./SearchBar.styles";
import { fetchArticles } from "../../api";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("kim");

  //   useEffect(() => {
  //     const getData = async () => {
  //       const response = await fetchArticles("us", "general", query);
  //       setPost(response);
  //     };
  //     getData();
  //   });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <StyledBar>
      <div className="container">
        <div className="search-outer">
          <form role="search" method="get" className="searchform">
            <input
              type="search"
              onChange={handleChange}
              placeholder="Search ..."
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <ul className="data-list">
          {/* post items mapped in a list linked to onKeyUp function */}
          {/* {post.map((item, index) => (
            <li className={"block-" + index}>
              <a className="title" href={item.url}>
                <h3>{item.title}</h3>
              </a>
              <a className="url" href={item.url}></a>
            </li>
          ))} */}
        </ul>
      </div>
    </StyledBar>
  );
};

export default SearchBar;
