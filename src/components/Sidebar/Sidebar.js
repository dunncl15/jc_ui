import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const menuItems = [
  'users',
  'systems',
  'policies',
  'groups',
  'applications',
  'directories',
  'commands',
  'radius',
];

const Sidebar = ({ location }) => {
  const isActive = index => menuItems[index] === location.pathname.slice(1);

  return (
    <aside id="sidebar">
      <h2>
        Jump<span>Cloud</span>
      </h2>
      <ul className="menu">
        {menuItems.map((item, i) => (
          <li key={i + 1}>
            <NavLink
              isActive={() => isActive(i)}
              className="menu-item"
              to={`/${item}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <footer>
        <ul>
          <li>Settings</li>
          <li>Support</li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
