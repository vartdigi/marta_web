import React from 'react';
import './AboutUs.css';
import Onas from '../../../assets/Onas.jpg';

export const AboutUs = () => {
  return (
    <section id="AboutUs">
      <div className="AboutFotka">
        <img className="AboutPic" src={Onas} />
      </div>
      <div className="ZahlavniText">
        <div className="HlavniNazev">
          <h1>O nás</h1>
        </div>

        <div className="Text">
          <p>
            Řekneme, že jsme klasické smyčcové duo. Možna to není celá pravda.
            Barvy, smích, přátelství a svoboda, to je to, co nám v práci každý
            den chybělo. Sundali jsme si boty, změnili černý dress-code na
            barevný a začali sme se bavit.
          </p>
        </div>
      </div>
    </section>
  );
};
