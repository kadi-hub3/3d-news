import React from "react";
import { StyledBar } from "./ETSidebar.styles";

const EntertainmentBar = ({ title, image, author }) => {
  return (
    <StyledBar>
      <section className="ET-bar">
        <img src={image} alt="article-img" />
        <h3>{title}</h3>
        <h6>By: {author}</h6>
      </section>
    </StyledBar>
  );
};

export default EntertainmentBar;
