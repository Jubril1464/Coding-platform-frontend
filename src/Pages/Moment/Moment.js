import React from "react";
import styles from "./Moment.module.css";
import img from '../../Assets/iphone_instagram.jpg'

const Moment = () => {
  return (
    <div className={styles.moment} id='instagram'>
      <h3 className={styles.heading__secondary}>
        A picture is worth a thousand words !
      </h3>
      <p className={styles.paragraph}>
        {" "}
        Help us capture the moment, tag your photos with the hashtag{" "}
        <span>#RamAndAntara</span>
          </p>
          <div className={styles.imgContainer}>
              <img src={img} alt="" className={styles.img} />
          </div>
    </div>
  );
};

export default Moment;
