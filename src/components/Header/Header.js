import React from 'react';
import './Header.scss';

const Header = ({ location }) => {
  const [x, path] = location.pathname.split('/');
  return (
    <header id="header">
      <h1>{path}</h1>
      <span>dunnc1551@gmail.com</span>
      <i className="material-icons">notifications</i>
    </header>
  );
};

export default Header;
