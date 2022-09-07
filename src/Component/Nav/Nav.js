import {useState} from "react";
import ReactDom from 'react-dom'
import logo from "../../Assets/logo.png";
import navStyles from './Nav.module.css'
const domElement = document.getElementById('nav')


function Nav() {
  const [check, setCheck] = useState(false)
  console.log(check);
  const handleCheck = () => {
    setCheck(false)

  }
  return ReactDom.createPortal(
    <header className={navStyles.header}>
     
      <div className={navStyles.navigation}>
        <div className={navStyles.logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
       
        <input
          type="checkbox"
          className={navStyles.navigation__checkbox}
          id="navi-toggle"
          checked={check}
          onChange ={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="navi-toggle" className={navStyles.navigation__button} >
          <span className={navStyles.navigation__icon}>&nbsp;</span>
        </label>
        <div className={navStyles.navigation__background}>&nbsp;</div>
        <nav className={navStyles.navigation__nav}>
          <ul className={navStyles.navigation__list}>
            <li className={navStyles.navigation__item}>
              <a href="#HowWeMeet" className={navStyles.navigation__link} onClick={handleCheck}>
                How We Meet
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#event" className={navStyles.navigation__link} onClick={handleCheck}>
                Events
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#instagram" className={navStyles.navigation__link} onClick={handleCheck}>
                Instagram
              </a>
            </li>
            <li className={navStyles.navigation__item}>
              <a href="#engagement" className={navStyles.navigation__link} onClick={handleCheck}>
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
