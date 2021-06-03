import React, { useState, useEffect } from "react";
import Headline from "./HeadLine/Headline";

function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [articlee, setArticle] = useState([]);

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
        // setAuthor(author);
        setDescription(articles);
        console.log(articles);
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
      {description.map((des) => {
        return (
          <Headline
            title={des.title}
            author={des.author}
            description={des.description}
            content={des.content}
            image={des.urlToImage}
          />
        );
      })}
    </main>
  );
}

export default App;
