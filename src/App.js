import React, { useState, useEffect } from "react";
import Headline from "./HeadLine/Headline";
import "./App.css";

function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [articles, setArticles] = useState([]);

  const api_key = "58c294635636451aafe0a2a729fb4de8";
  const url = "https://newsapi.org/v2/top-headlines";

  const inputUser = "us";

  const fetchArticles = async () => {
    const countryQuery = "?country=";
    const endpoint = `${url}${countryQuery}${inputUser}&apiKey=${api_key}`;

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        const articles = jsonResponse.articles;
        setArticles(articles);
      }
      throw new Error("Request Failed!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <main className="App">
      <h1>Headlines of the month</h1>
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
    </main>
  );
}

export default App;
