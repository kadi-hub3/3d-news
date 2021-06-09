import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 1rem 4rem;

  .categories,
  .lingo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lingo {
    font-family: serif;
  }

  .categories {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 0.9rem;
  }

  a {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  h1 {
    text-align: center;
    padding: 2rem 0;
    text-transform: capitalize;
    font-family: "Yeseva One", cursive;
    letter-spacing: 5px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title h1 {
    font-family: "UnifrakturCook", cursive;
  }
  .active {
    font-weight: bolder;
  }
`;
