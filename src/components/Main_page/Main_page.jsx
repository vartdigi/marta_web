import React from 'react';
import './Main_page.css';
import HlavniFotka from '../../../assets/HlavniFotka.jpg';
import stin from '../../../assets/stin.svg';

export const Main_page = () => {
  return (
    <section id="Main_page">
      <div className="HlavniFotka">
        <img className="MainPic" src={HlavniFotka} />
      </div>
      <div className="logo">
        <div className="MainText">
          <h1>MARTA</h1>
        </div>
        <div className="Stin">
          <img className="Stin" src={stin} />
        </div>
        <div className="duo">
          <h2>duo</h2>
        </div>
      </div>

      <div className="MainCitat">
        <p>"Creativity is intelligence having fun."</p>
      </div>

      <div className="sipka"></div>
    </section>
  );
};
