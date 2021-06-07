import React, { useState, useEffect } from "react";
import Headline from "../components/HeadLine/Headline";
import { fetchArticles } from "../api";

const ET = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("us", "entertainment");
      console.log(response);
      setArticles(response);
    };
    getArticles();
    // return () => {
    //   setArticles([]);
    // };
  }, []);
  return (
    <div>
      {articles &&
        articles.map((article, id) => {
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
    </div>
  );
};

export default ET;
