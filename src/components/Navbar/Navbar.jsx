import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { StyledNav } from "./Navbar.styles";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <StyledNav>
      <nav>
        <div className="nav-header">
          <Link to="/fashion-blog">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            {show ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
        <div className={show ? "links-container show" : "links-container"}>
          <ul className="links">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Science</Link>
            </li>
            <li>
              <Link to="/">Tech</Link>
            </li>
          </ul>
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Type some keyword..."
            />
            <FaSearch className="search-btn" />
          </div>
        </div>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
