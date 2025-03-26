import React from 'react';
import './Works.css';
import Follow from '../../../assets/Follow.png';
import naseFotka from '../../../assets/naseFotka.png';
import marta from '../../../assets/marta.png';

export const Works = () => {
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
      <div className="fotkamy">
        <img src={naseFotka} alt="naseFotka" />
      </div>
      <div className="photo-player">
        <img src={marta} alt="Photo" className="player-photo" />
        <audio controls>
          <source src="song1.mp3" type="audio/mp3" />
          <source src="song2.mp3" type="audio/mp3" />
          <source src="song3.mp3" type="audio/mp3" />
          Ваш браузер не поддерживает аудио элементы.
        </audio>
      </div>
    </section>
  );
};
