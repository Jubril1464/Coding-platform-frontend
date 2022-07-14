import React from "react";
import logo from "../../Assets/logo.png";
import Button from "../Button/Button";
import navStyles from './Nav.module.css'


function Nav() {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.logo}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={navStyles.nav__container}>
        <ul className={navStyles.navItems}>
          <a href="">
            {" "}
            <li className={navStyles.navItem}>How we meet</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className={navStyles.navItem}>Events</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className={navStyles.navItem}>Instagram</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className={navStyles.navItem}>Engagement</li>{" "}
          </a>
          <a href="">
            {" "}
            <li className={navStyles.navItem}>Venue</li>{" "}
          </a>
        </ul>
      </div>
     <Button color='#fff' backgroundColor='transparent' border='1px solid black' borderRadius='10px' >RSVP</Button>
    </header>
  );
}

export default Nav;
