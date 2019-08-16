import React from 'react';
import './Header.scss';

const Header = ({ location }) => {
  return (
    <header id="header">
      <h1>{location.pathname.slice(1)}</h1>
      <span>dunnc1551@gmail.com</span>
      <i className="material-icons">notifications</i>
    </header>
  );
};

export default Header;
