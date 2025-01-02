import './Header.css';
import React from 'react';

import { HeaderItems } from './HeaderItems/HeaderItems.jsx';

export const Header = () => {
  return (
    <header>
      <div className="desktop-menu">
        <nav className="navigation">
          <HeaderItems />
        </nav>
      </div>
    </header>
  );
};
