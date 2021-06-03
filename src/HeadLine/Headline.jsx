import React from "react";

const Headline = ({ title, author, description, content, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="headline img" />
      <h4>{author}</h4>
      <span>{description}</span>
      <p>{content}</p>
    </div>
  );
};

export default Headline;
