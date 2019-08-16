import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const menuItems = [
  { text: 'users', icon: 'supervisor_account' },
  { text: 'systems', icon: 'devices' },
  { text: 'policies', icon: 'security' },
  { text: 'groups', icon: 'group_work' },
  { text: 'applications', icon: 'widgets' },
  { text: 'directories', icon: 'storage' },
  { text: 'commands', icon: 'subtitles' },
  { text: 'radius', icon: 'wifi_tethering' },
];

const Sidebar = ({ location }) => {
  const isActive = index =>
    menuItems[index].text === location.pathname.slice(1);

  return (
    <aside id="sidebar">
      <h2>
        Jump<span>Cloud</span>
      </h2>
      <ul className="menu">
        {menuItems.map(({ text, icon }, i) => (
          <li key={i + 1}>
            <NavLink
              isActive={() => isActive(i)}
              className="menu-item"
              to={`/${text}`}
            >
              <i className="material-icons">{icon}</i>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <footer>
        <ul className="menu">
          <li>
            <NavLink className="menu-item" to="/settings">
              <i className="material-icons">settings</i>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-item" to="/support">
              <i className="material-icons">question_answer</i>
              Support
            </NavLink>
          </li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
