import React from 'react';
import './Main_page.css';
import HlavniFotka from '../../../assets/HlavniFotka.jpg';

export const Main_page = () => {
  return (
    <section id="Main_page">
      <div className="opening">
        <div className="HlavniFotka">
          <img className="MainPic" src={HlavniFotka} />
        </div>
        <div className="datumText">
          <div className="uvodniDatum">
            <span>17</span>
            <span>08</span>
            <span>24</span>
          </div>
          <div className="uvodniText">
            <p>
              S radostí a úsměvem Vám oznamujeme, že se budeme brát. Své
              prstýnky si vyměníme v areálu hotelu Obora v Kněžičkách u Chlumce
              nad Cidlinou.
            </p>
          </div>
        </div>
        <div className="sipka"></div>
      </div>
    </section>
  );
};
