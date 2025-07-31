import { Link, useLocation } from 'react-router-dom';
import './HeaderItems.css';
import { useEffect } from 'react';

export const HeaderItems = ({ onSelect }) => {
  const location = useLocation();

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onSelect(); // zavře hamburger menu
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
