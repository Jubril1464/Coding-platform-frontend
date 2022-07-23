import React from "react";
import ReactDom from 'react-dom'
import logo from "../../Assets/logo.png";
import Button from "../Button/Button";
import navStyles from './Nav.module.css'
const domElement = document.getElementById('nav')


function Nav() {
  return ReactDom.createPortal(
    <header className={navStyles.header}>
      {/* 
      <Button
        color="#fff"
        backgroundColor="transparent"
        border="1px solid black"
        borderRadius="10px"
      >
        RSVP
      </Button> */}
      <div className={navStyles.navigation}>
        <div className={navStyles.logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* <ul className={navStyles.navItems}>
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
        </ul> */}
        <input
          type="checkbox"
          className={navStyles.navigation__checkbox}
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className={navStyles.navigation__button}>
          <span className={navStyles.navigation__icon}>&nbsp;</span>
        </label>
        <div className={navStyles.navigation__background}>&nbsp;</div>
        <nav className={navStyles.navigation__nav}>
          <ul className={navStyles.navigation__list}>
            <li className={navStyles.navigation__item}>
              <a href="#HowWeMeet" className={navStyles.navigation__link}>
                How We Meet
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#event" className={navStyles.navigation__link}>
                Events
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#instagram" className={navStyles.navigation__link}>
                Instagram
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#engagement" className={navStyles.navigation__link}>
                Engagement
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>,
    domElement
  );
}

export default Nav;
