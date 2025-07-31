import { Link, useLocation } from 'react-router-dom';
import './HeaderItems.css';
import { useEffect } from 'react';

export const HeaderItems = ({ onSelect }) => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleClick = (id) => {
    onSelect();
  };

  return (
    <>
      <Link
        to={{ pathname: '/', hash: '#hlavni' }}
        className="menu-item"
        onClick={() => handleClick('hlavni')}
      >
        Hlavní
      </Link>

      <Link to="/about-full" className="menu-item" onClick={onSelect}>
        O nás
      </Link>

      <Link
        to={{ pathname: '/', hash: '#galerie' }}
        className="menu-item"
        onClick={() => handleClick('galerie')}
      >
        Galerie
      </Link>

      <Link
        to={{ pathname: '/', hash: '#contact' }}
        className="menu-item"
        onClick={() => handleClick('contact')}
      >
        Kontakt
      </Link>
    </>
  );
};
