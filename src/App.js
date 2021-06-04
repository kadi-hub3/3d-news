import React, { useState, useEffect } from "react";
import Headline from "./HeadLine/Headline";
import TechSidebar from "./TechSidebar/TechSidebar";
import "./App.css";
import { fetchArticles } from "./api";

function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles();
      setArticles(response);
    };
    getArticles();
  }, []);

  return (
    <main className="App">
      <h1>Headlines of the month</h1>
      <div className="sections">
        <section>
          {articles.map((article) => {
            return (
              <TechSidebar
                title={article.title}
                author={article.author}
                description={article.description}
                content={article.content}
                authorImg={article.urlToImage}
                authorProfession="Reporter"
              />
            );
          })}
        </section>
        <section>
          {articles.map((article) => {
            return (
              <Headline
                title={article.title}
                author={article.author}
                description={article.description}
                content={article.content}
                image={article.urlToImage}
                authorImg={article.urlToImage}
                authorProfession="Reporter"
              />
            );
          })}
        </section>
        <section>
          {articles.map((article) => {
            return (
              <Headline
                title={article.title}
                author={article.author}
                description={article.description}
                content={article.content}
                image={article.urlToImage}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
