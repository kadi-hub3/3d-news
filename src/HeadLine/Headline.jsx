import React from "react";
import { StyledArticle } from "./Headline.styles";

const Headline = ({ title, author, description, content, image }) => {
  return (
    <StyledArticle>
      <div className="news-article">
        <img src={image} alt="headline img" />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span>{description}</span>
        <p>{content}</p>
      </div>
    </StyledArticle>
  );
};

export default Headline;
