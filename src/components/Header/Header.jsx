import './Header.css';
import { HeaderItems } from './HeaderItems/HeaderItems.jsx';
import { useState } from 'react';
import menuIcon from '../../../assets/menu.png';
import closeIcon from '../../../assets/krizek.png';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleSelectItem = () => {
    setMenuOpened(false);
  };
  useEffect(() => {
    // Po reloadu smaže hash
    if (location.hash) {
      navigate(location.pathname, { replace: true });
    }
  }, []);

  return (
    <header>
      {/* Desktop menu */}
      <div className="desktop-menu">
        <nav className="navigation">
          <HeaderItems onSelect={handleSelectItem} />
        </nav>
      </div>

      {/* Hamburger icon */}
      <button className="menu-icon-button" onClick={toggleMenu}>
        <img
          src={menuOpened ? closeIcon : menuIcon}
          alt="menu icon"
          className="menu-icon"
        />
      </button>

      {/* Mobile menu */}
      {menuOpened && (
        <nav className="hamburger-menu open">
          <HeaderItems onSelect={handleSelectItem} />
        </nav>
      )}
    </header>
  );
};
