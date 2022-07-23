import React from "react";
import meetStyles from "./HowWeMeet.module.css";
import img1 from '../../../Assets/IMG_2317.jpg'
import img2 from '../../../Assets/DSD_0214.jpg'
const data = [
  {
    firstDay: "27th",
    secondDay: "28th",
    month: "November",
    year: "2017",
    meetDate: "2008",
  },
];

const HowWeMeet = () => {
  return (
    <div className={meetStyles.meet} id='HowWeMeet'>
      <h2 className={meetStyles.headingSecondary}>We are getting hitched</h2>
      {data.map(({ firstDay, secondDay, month, year }) => (
        <p className={meetStyles.paragraph}>
          The dates are {firstDay} and {secondDay} of {month} {year}, and we
          would like you to be a part of it
        </p>
      ))}
      <h2
        className={`${meetStyles.headingSecondary} ${meetStyles.marginTopBig}`}
      >
        How We Meet{" "}
      </h2>
      <div className={meetStyles.container}>
        <img src={img1} alt="" className={meetStyles.containerImg} />
        <p className={meetStyles.paragraph}>
          I first saw Antara in the Fall of 2008 whe we started our undergrad. I
          was instantly attracted to her but was far too nervous to speak to
          her. I had told my friend i liked her and new had traveled fast and
          she found out soon. Her first reaction was "Who is Ram ?" and she
          began searching for me in the class. She started to take notice of me
          and no matter how boring the lecture was, we never missed a class
          after that. After a good few months i finally plucked up the courage
          to ask her out and the rest is history ❤❤
        </p>
        <img src={img2} alt="" className={meetStyles.containerImg} />
      </div>
    </div>
  );
};

export default HowWeMeet;
