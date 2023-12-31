import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navWrap">
      <div className="nav">
        <div className="navLeft">
          <Link to="/">
            <img src="${process.env.PUBLIC_URL}/../images/logo.png" />
          </Link>
          <Link to="/">About</Link>
          <Link to="/movies">View</Link>
          <Link to="/search">Search</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="navRight">
          <form>
            <input type="text" placeholder="Search" />
            <button className="searchBtn"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
