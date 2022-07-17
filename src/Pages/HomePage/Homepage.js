import React from 'react'
import homeStyles from "./Homepage.module.css"
import { Button } from '@mui/material'
import heroLogo from '../../Assets/logo-lg.png'

function Homepage() {
  return (
    <div className={homeStyles.heroSection}>
      <div className="img__container">
        <img src={heroLogo} alt="" className={homeStyles.heroLogo} />
      </div>
     
    </div>
  );
}

export default Homepage