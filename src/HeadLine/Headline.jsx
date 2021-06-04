import React from "react";
import { StyledArticle } from "./Headline.styles";

const Headline = ({
  title,
  author,
  description,
  content,
  image,
  authorImg,
  authorProfession,
}) => {
  return (
    <StyledArticle>
      <div className="news-article">
        <img src={image} alt="headline img" />
        <h2>{title}</h2>
        <span>{description}</span>
        <p>{content}</p>
        <div className="author">
          <img src={authorImg} alt="author's image" />
          <div>
            <h5>{author}</h5>
            <h6>{authorProfession}</h6>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Headline;
