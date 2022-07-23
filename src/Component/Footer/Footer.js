import React from 'react'
import styles from './Footer.module.css'
import {IoIosArrowDropup} from 'react-icons/io'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <a href="/">
          {" "}
          <span className={styles.icon}>
            {" "}
            <IoIosArrowDropup size={50} />
          </span>{" "}
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default Footer