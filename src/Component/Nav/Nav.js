import React from "react";
import logo from "../../Assets/logo.png";
import './Nav.css'

function Nav() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav__container">
        <ul className="nav--items">
          <a href="">
            {" "}
            <li className="nav--item">How we meet</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className="nav--item">Events</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className="nav--item">Instagram</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className="nav--item">Engagement</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className="nav--item">Venue</li>{" "}
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
