import styled from "styled-components";

export const StyledArticle = styled.div`
  .news-article {
    width: 30vw;
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 2rem 1rem;
    line-height: 1.75;
    font-family: serif;
    border: 1px solid lightgray;

    img {
      width: 30vw;
      height: 30vh;
      padding-bottom: 1rem;
      filter: grayscale(100%);
    }

    .author {
      display: flex;
      justify-content: flex-start;
      margin: 1rem;

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        margin: 0 0.5rem;
      }

      div {
        margin: 0.2rem;
        padding: 0.2rem;
      }
    }
  }
`;
