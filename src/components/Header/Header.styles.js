import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 1rem 4rem;

  .categories,
  .lingo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .categories button,
  .lingo button {
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
    text-decoration: underline;
    letter-spacing: 1px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
