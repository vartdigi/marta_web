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
            Jsme Marta Duo - housle a cello, dva nástroje, dva hlasy, jedna
            duše. Naše hudební cesta začala dávno předtím, něž jsme si
            uvědomili, že patříme na pódium společně. Hrály jsme v orchestrech,
            cestovaly od Evropy do Asii, spolupracovaly se skvělými sólisty a
            nasávali inspiraci na každém kroku.
          </p>
        </div>
        <div
          className={`image-right ${isVisible ? 'visible' : ''}`}
          ref={fotkaRef}
        >
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
