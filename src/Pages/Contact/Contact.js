import React from "react";
import Button from "../../Component/Button/Button";
import styles from "./Contact.module.css";
import {AiOutlineMail} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import {FiKey} from 'react-icons/fi'
const Contact = () => {
  return (
    <div className={styles.formContainer} id='contact'>
      <h3 className={styles.headingTertiary}>What are you waiting for?</h3>
      <p className={styles.paragraph}>
        We would greatly appriciate if you could RSVP before 1st of November 17
      </p>

      <form className={styles.form}>
        <div className={styles.form__group}>
          <AiOutlineMail size={50} className={styles.icon} />{" "}
          <input type="text" className={styles.form__input} placeholder='Your email'/>
          <FaUserAlt size={50} className={styles.icon} />{" "}
          <input type="text" className={styles.form__input} placeholder='Your name' />
        </div>
        <div className={styles.form__group}>
          <FaUsers size={50} className={styles.icon} />{" "}
          <input type="text" className={styles.form__input} placeholder='Husband/Wife or Kids' />
          <FiKey size={50} className={styles.icon} />{" "}
          <input type="text" className={styles.form__input} placeholder='invite code' />
        </div>
        <div className={styles.form__group}>
          <Button
            backgroundColor="#ca8a04"
            borderRadius="2px"
            className={styles.ctaBtn}
          >
            Yes, that's me
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
