import React from "react";
import { StyledSidebar } from "./TechSidebar.styles";

const TechSidebar = ({
  title,
  description,
  author,
  authorImg,
  authorProfession,
}) => {
  return (
    <StyledSidebar>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="author">
          <img src={authorImg} alt="author's" />
          <div>
            <h5>{author}</h5>
            <h6>{authorProfession}</h6>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default TechSidebar;
