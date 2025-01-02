import { Link } from 'react-router-dom';
import './HeaderItems.css';

export const HeaderItems = () => {
  return (
    <>
      <Link to="/" className="menu-item">
        Hlavní
      </Link>
      <Link to="/AboutUs" className="menu-item">
        O nás
      </Link>

      <Link to="/Galerie" className="menu-item">
        Galerie
      </Link>
      <Link to="/#Kontakt" className="menu-item">
        Kontakt
      </Link>
    </>
  );
};
