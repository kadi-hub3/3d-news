import React, { useState, useEffect } from "react";
import Sidebar from "../components/EntertainmentBar/ETSidebar";
import { fetchArticles } from "../api";

const Business = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("", "business");
      setArticles(response);
    };
  });

  return (
    <div>
      {articles.map((article, id) => {
        return (
          <a href={article.url} target="_blank" rel="noreferrer" key={id}>
            <Sidebar
              title={article.title}
              author={article.author}
              image={article.urlToImage}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Business;
