import React, { useEffect, useRef, useState } from 'react';
import './Works.css';
import Follow from '../../../assets/Follow.png';
import naseFotka from '../../../assets/naseFotka.png';

import Music from './Music.jsx';

export const Works = () => {
  const fotkaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }, // Процент видимости, когда активируется анимация
    );

    if (fotkaRef.current) {
      observer.observe(fotkaRef.current);
    }

    return () => {
      if (fotkaRef.current) {
        observer.unobserve(fotkaRef.current);
      }
    };
  }, []);

  return (
    <section className="works-section">
      <div className="firstblock">
        <div className="text-left">
          <p>
            Here is our last projekt - video on Youtube. You can follow us and
            be in tune. Gjalsjfh ldfjrugodkjcg laksjid,, latros kombinus hadore.
            Hamona drem be hrkara. Hilako kamuro lakremakasnub lora lumbus
            hamrelo.
          </p>
        </div>

        <div className="image-right">
          <img src={Follow} alt="Work" />
        </div>
      </div>
      <div className="photo-player">
        <div className="music-photo-row">
          <div className="music-block">
            <Music />
          </div>
          <img src={naseFotka} alt="naseFotka" />
        </div>
      </div>
    </section>
  );
};
