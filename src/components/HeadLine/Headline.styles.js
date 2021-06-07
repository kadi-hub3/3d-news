import styled from "styled-components";

export const StyledArticle = styled.div`
  display: flex;
  justify-content: center;

  .news-article {
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 1rem;
    line-height: 1.75;
    font-family: serif;
    width: 50vw;

    img {
      width: 100%;
      height: 40vh;
      padding-bottom: 1rem;
    }

    .author {
      display: flex;
      justify-content: start;
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
