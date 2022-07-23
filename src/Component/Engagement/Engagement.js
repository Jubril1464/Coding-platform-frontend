import React from 'react'
import styles from'./Engagement.module.css'
import img1 from '../../Assets/_RFX2942-sm.jpg'
import img2 from '../../Assets/IMG_3483-sm.jpg'
import img3 from "../../Assets/_RFX2992-sm.jpg";
import img4 from "../../Assets/_RFX3064-sm.jpg";
import img5 from '../../Assets/NGP_4089-sm.jpg'
import img6 from "../../Assets/NGP_4119-sm.jpg";

function Engagement() {
  return (
      <div className={styles.engagement} id='engagement'>
          <h3>Engagement Pics</h3>
          <div className={styles.img__container}>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              
          </div>
    </div>
  )
}

export default Engagement