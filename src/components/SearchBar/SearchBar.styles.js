import styled from "styled-components";

export const StyledBar = styled.div`
  .articles-fetched {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  .search-outer {
    display: flex;
    justify-content: flex-end;
  }

  input,
  button {
    padding: 0.5rem;
  }
`;
