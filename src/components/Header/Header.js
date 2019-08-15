import React from 'react';
import './Header.scss';

const Header = ({ location }) => {
  return (
    <header id="header">
      <h1>{location.pathname.slice(1)}</h1>
    </header>
  );
};

export default Header;
