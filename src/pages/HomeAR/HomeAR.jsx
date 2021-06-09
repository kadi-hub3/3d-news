import React, { useState, useEffect } from "react";
import Headline from "../../components/EntertainmentBar/ETSidebar";
import TechSidebar from "../../components/TechSidebar/TechSidebar";
import ETSidebar from "../../components/EntertainmentBar/ETSidebar";
import { fetchArticles } from "../../api";
import { GlobalStyle } from "../Home/Home.styles";

const HomeAr = () => {
  const [articles, setArticles] = useState([]);
  const [techArticles, setTechArticles] = useState([]);
  const [etArticles, setETArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("ae", "general");
      const techResponse = await fetchArticles("ae", "technology");
      const etResponse = await fetchArticles("ae", "entertainment");
      setArticles(response);
      setTechArticles(techResponse);
      setETArticles(etResponse);
    };

    getArticles();
  }, []);

  return (
    <>
      <GlobalStyle />
      <main className="app">
        <div className="sections">
          <section>
            {techArticles.map((article, id) => {
              return (
                <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                  <TechSidebar
                    title={article.title}
                    author={article.author}
                    description={article.description}
                    content={article.content}
                    authorImg={article.urlToImage}
                    authorProfession="Reporter"
                  />
                </a>
              );
            })}
          </section>
          <section>
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
          </section>
          <section>
            {etArticles.map((article, id) => {
              return (
                <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                  <ETSidebar
                    title={article.title}
                    author={article.author}
                    image={article.urlToImage}
                  />
                </a>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default HomeAr;
