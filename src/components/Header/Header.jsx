import './Header.css';
import { HeaderItems } from './HeaderItems/HeaderItems.jsx';
import menuIcon from '../../../assets/menu.png';
import closeIcon from '../../../assets/krizek.png';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {/* Desktop menu */}
      {!isMobile && (
        <div className="desktop-menu">
          <nav className="navigation">
            <HeaderItems />
          </nav>
        </div>
      )}

      {/* Mobile menu */}
      {isMobile && (
        <div className="mobile-header">
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt="menu toggle"
              className="menu-icon"
            />
          </div>

          {isOpen && (
            <nav className="mobile-menu">
              <HeaderItems />
            </nav>
          )}
        </div>
      )}
    </header>
  );
};
