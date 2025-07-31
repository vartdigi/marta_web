import React from 'react';
import './AboutFull.css';
import Vart from '../../../assets/varta.jpg';
import Majka from '../../../assets/Majka.jpg';

export const AboutFull = () => {
  return (
    <section id="aboutFull">
      <div className="Hlavnitext">
        <h1>O nás </h1>
      </div>
      <div className="Secondtext">
        <p>
          Řekneme, že jsme klasické smyčcové duo. Možná to není celá pravda.
          Barvy, smích, přátelství a svoboda, to je to, co nám v práci každý den
          chybělo. Sundali jsme si filharmonické boty, změnili černý dress-code
          na barevný a začali jsme se bavit. Hrajeme hudbu nejen jako umění, ale
          jako způsob, jak šířit radost a spojovat lidi.
        </p>
      </div>
      <div className="members">
        <div className="member">
          <img className="Vart" src={Vart} alt="vart" />
          <h2>Vartui Bartoníček</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis{' '}
          </p>
        </div>
        <div className="member">
          <img className="Majka" src={Majka} alt="majka" />
          <h2>Mariá Sczanizslo</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
