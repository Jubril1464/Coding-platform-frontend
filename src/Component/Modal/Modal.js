import { React, useEffect } from "react";
import Styles from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";

const domElement = document.getElementById("modal");

const Modal = ({ show, close }) => {
    // const closeOnEscapeKeydown = (e) => {
    //     // if ((e.charCode || e.keyCode) === "27") {
    //     //     close();
    //     // }
    //   if (e.key === 'Escape') {
    //      close()
    //   }
    // };
    // useEffect(() => {
    //     document.body.addEventListener("keydown", closeOnEscapeKeydown);
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', closeOnEscapeKeydown)
    //     }
    // }, []);

  return (
    <>
      {show ? (
        <div className={`${Styles.modalContainer}`} onClick={() => close()}>
          <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
            <header className={Styles.modal__header}>
              <h2 className={Styles.modal__headerTitle}>
                ugh.... Dress Codes?
              </h2>
              <FaTimes
                className={Styles.close}
                onClick={() => close()}
              ></FaTimes>
            </header>
            <main className={Styles.modal__content}>
              <div className={Styles.text__container}>
                <p className={Styles.heading__secondary}>
                  MEHDI <span>1pm - 5pm</span>
                </p>
                <p className={Styles.heading__tertiary}>Ethnic indian wear</p>
                <p className={Styles.paragraph}>
                  Ladies can wear something bright & vivid and gentlemen can be
                  on their vibrant kurtas with pants and pyjamas along with and
                  optional shawi
                </p>
              </div>
              <div className={Styles.text__container}>
                <p className={Styles.heading__secondary}>
                  Cocktail Night <span>7pm - 12am</span>
                </p>
                <p className={Styles.heading__tertiary}>Western attire</p>
                <p className={Styles.paragraph}>
                  A semi formal look that is cotemporary and fashionable whic is
                  not too prim & proper is the best to pull this night. You can
                  see some pins for ladies and gen
                </p>
              </div>
              <div className={Styles.text__container}>
                <p className={Styles.heading__secondary}>
                  Wedding <span>6pm - 12pm</span>
                </p>
                <p className={Styles.heading__tertiary}>Indo-western </p>
                <p className={Styles.paragraph}>
                  Ladies can flaunt their uncoventional sarees, lehengas,
                  anarkalis dresses and the list goes on whereas gentlemen can
                  wear any kind of suit or just blazzer. if you dont like to
                  wear suit/blazzer, you can do a high neck(band-gala) waist
                  coat and shirt combo.
                </p>
              </div>
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
