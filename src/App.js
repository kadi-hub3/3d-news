import React, { useState, useEffect } from "react";
import Headline from "./HeadLine/Headline";
import TechSidebar from "./TechSidebar/TechSidebar";
import ETSidebar from "./components/EntertainmentBar/ETSidebar";
import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { fetchArticles, getCurrentDate } from "./api";

function App() {
  const [articles, setArticles] = useState([]);
  const [techArticles, setTechArticles] = useState([]);
  const [etArticles, setETArticles] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("US", "");
      const techResponse = await fetchArticles("us", "technology");
      const etResponse = await fetchArticles("us", "entertainment");
      setArticles(response);
      setTechArticles(techResponse);
      setETArticles(etResponse);
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
    <>
      {/* <Navbar /> */}
      <main className="App">
        <div className="lingo">
          <button>U.S.</button>
          <button>FRANCE</button>
          <button>ESPAÑOL ar</button>
          <button>العربية ae</button>
        </div>
        <div className="title">
          <h4>{date}</h4>

          <h1>Top Stories</h1>
          <h4>current weather</h4>
        </div>

        <div className="categories">
          <button onClick={handleClick} id="business">
            business
          </button>
          <button onClick={handleClick} id="entertainment">
            entertainment
          </button>
          <button onClick={handleClick} id="general">
            general
          </button>
          <button onClick={handleClick} id="health">
            health
          </button>
          <button onClick={handleClick} id="sciences">
            sciences
          </button>
          <button onClick={handleClick} id="sports">
            sports
          </button>
          <button onClick={handleClick} id="technology">
            technology
          </button>
        </div>
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
}

export default App;
