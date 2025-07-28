import './style.css';
import { Main_page } from '../../components/Main_page/Main_page.jsx';
import { AboutUs } from '../../components/AboutUs/AboutUs.jsx';
import { Works } from '../../components/Works/Works.jsx';
import { Video } from '../../components/Video/Video.jsx';
import { Galerie } from '../../components/Galerie/Galerie.jsx';

export const HomePage = () => {
  return (
    <div className="container">
      <Main_page />
      <AboutUs />
      <Works />
      <Video />
      <Galerie />
    </div>
  );
};
