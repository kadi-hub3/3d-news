import React, { useState, useEffect } from "react";
import Headline from "../components/HeadLine/Headline";
import { fetchArticles } from "../api";

const Business = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("us", "business");
      setArticles(response);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article, id) => {
        return (
          <a href={article.url} target="_blank" rel="noreferrer" key={id}>
            <Headline
              title={article.title}
              author={article.author}
              description={article.description}
              content={article.summary}
              image={article.urlToImage}
              authorImg={article.urlToImage}
              authorProfession="Reporter"
            />
          </a>
        );
      })}
    </div>
  );
};

export default Business;
