import styled from "styled-components";

export const StyledNav = styled.nav`
  nav {
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.75rem 2rem;
    width: 100%;
    z-index: 22;
    font-family: Montserrat;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  img {
    height: clamp(8vh, 8vh, 12vh);
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: #333;
    background: transparent;
    border-color: transparent;
    transition: 0.3s ease-in;
    cursor: pointer;
    &:hover {
      color: violet;
      transform: rotate(90deg);
    }
  }
  .links-container {
    display: flex;
    justify-content: start;
    font-size: 1rem;
    overflow: hidden;
    transition: 0.3s ease-in;
    height: 0;
    &.show {
      height: 20rem;
      border-radius: 1rem;
      background: #fff;
    }
  }
  .links a {
    color: #333;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1.5;
    display: block;
    padding: 0.5rem 1rem;
    transition: 0.3s ease-in;
    text-decoration: none;
  }

  .search-box {
    margin: 0 0.5rem;
  }
  .search-input {
    display: none;
    padding: 0.5rem;
  }
  .search-box:hover .search-input {
    display: inline-block;
    margin: 0.5rem;
  }
  @media screen and (min-width: 800px) {
    nav {
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-transform: uppercase;
    }
    .links {
      display: flex;
      list-style: none;
      margin: 0 1rem;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: violet;
      text-decoration: underline;
    }
  }
`;
