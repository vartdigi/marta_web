import './Galerie.css';
import { useState, useEffect } from 'react';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
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
];

export const Galerie = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const displayedImages = !showAll ? images.slice(0, 6) : images;
  return (
    <section id="Galerie">
      <div className="ZahlavniTextGalerie">
        <div className="HlavniNazevGalerie">
          <h1>Galerie</h1>
        </div>
      </div>

      <div className="css-columns">
        {displayedImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={`/images/${img}`}
              alt={`Foto ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="more-photos-btn-wrapper">
          <button onClick={() => setShowAll(true)} className="more-photos-btn">
            Více fotek
          </button>
        </div>
      )}
    </section>
  );
};
