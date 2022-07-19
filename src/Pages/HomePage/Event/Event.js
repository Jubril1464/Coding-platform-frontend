import { React, useState }  from "react";
import eventStyles from "./Event.module.css";
import Button from "../../../Component/Button/Button";
import { FcCloth } from 'react-icons/fc'
import Modal from "../../../Component/Modal/Modal";

const Event = () => {
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show)
  }
  return (
    <div className={eventStyles.event}>
      <Modal show={show} close={Toggle} />
      <h3 className={eventStyles.headingTertiary}>Events</h3>
      <div className={eventStyles.rowContainer}>
        <div className={eventStyles.row}>
          <p className={eventStyles.paragraph}>27th November</p>
          <p className={eventStyles.paragraph}>
            {" "}
            <span>MEHNDI </span> 1pm - 5pm
          </p>
          <p className={eventStyles.paragraph}>
            It's one of the oldest traditional Indian pre wedding ceremony where
            the bride and groom attend the event together and a professional
            mehndi artist applies mehndi to the bride's hands and feet. This
            will be having a celebratory festival feel to it with people wearing
            vibrant clothes and dancing, singing, playing games and a lot more.
          </p>
          <p className={eventStyles.paragraph}>
            {" "}
            <span>CockTail Night</span> 7pm - 12am
          </p>
          <p className={eventStyles.paragraph}>
            This event is no way close to ethnic. The bride and the Groom will
            like have some "shot before the knots". With booze flowing down the
            floor and the western attire on, everyone would be busy showing off
            their new moves on the stage which they have finally honed . Lastly
            expect some beer pong matches & karaoke for sure.
          </p>
        </div>
        <div className={eventStyles.row}>
          <p className={eventStyles.paragraph}>28th November</p>
          <p className={eventStyles.paragraph}>
            {" "}
            <span>HALDI </span> 10am - 11am
          </p>
          <p className={eventStyles.paragraph}>
            The Haldi ceremony is usually held seperately for the bride and the
            groom. This one is for the bride. it is a low-key event that
            involves the application of tumeric paste on the hands, legs and
            face of the bride. The groom is not allow to see the bride after
            this ritual until the final wedding ceremony starts.
          </p>
          <p className={eventStyles.paragraph}>
            {" "}
            <span>Wedding</span> 6pm - 12am
          </p>
          <p className={eventStyles.paragraph}>
            This is the main event of the entire wedding when the bride and the
            groom tie the knot. The groom come with barat and is greeted by the
            bride with some dhol of course as maximum number of guest would be
            attending this event. This is when the circle the sacred fire and
            are finally declared husband and wife
          </p>
        </div>
      </div>
      <div className={eventStyles.btnContainer}>
        <Button
          border="1px solid brown"
          borderRadius="2rem"
          padding="1rem 4rem"
          color='rgba(0,0,0,.8)'
          onClick={Toggle}
        >
         <FcCloth size={15} ></FcCloth> Dress Code{" "}
        </Button>
      </div>
    </div>
  );
};

export default Event;
