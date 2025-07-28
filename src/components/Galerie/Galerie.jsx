import React from 'react';
import Masonry from 'react-masonry-css';
import './Galerie.css';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpeg',
  '6.jpg', // oprava názvu z "6jpg"

  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',

  '19.jpg',
  '20.jpg',

  '22.jpg',
  '23.jpg',
  '24.jpeg',
  '25.jpeg',
  '26.jpeg',
  '27.jpeg',
  '28.jpeg',
  '29.jpeg',
  '30.jpeg',
  '31.jpeg',
  // Přidej další názvy podle potřeby
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

export const Galerie = () => {
  return (
    <section id="Galerie">
      <div className="ZahlavniTextGalerie">
        <div className="HlavniNazevGalerie">
          <h1>Galerie</h1>
        </div>
      </div>
      <div className="css-columns">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={`/images/${img}`} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
