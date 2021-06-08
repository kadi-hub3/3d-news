import styled from "styled-components";

export const StyledFooter = styled.div`
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      padding: 1rem 0;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      cursor: pointer;

      li {
        padding: 0 0.7rem;
      }
    }
  }
`;
