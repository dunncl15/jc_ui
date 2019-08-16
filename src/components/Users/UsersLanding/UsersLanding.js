import React from 'react';
import { Route } from 'react-router-dom';
import NewUserForm from '../NewUserForm/NewUserForm';
import background from '../../../images/usersGettingStarted.svg';
import './UsersLanding.scss';

const UsersLanding = ({ history, users, saveNewUser }) => {
  return (
    <section className="users--landing-page">
      <h2>Welcome to JumpCloud!</h2>
      <img className="default-img" src={background} alt="" />
      <p>
        Get started by adding users. Then give them secure access to any resource,
        including systems (Mac, Windows, Linux), directories (LDAP, GSuite), SSO
        applications, RADIUS networks (WiFi, VPN), and more.
      </p>
      <button className="cta-btn" onClick={() => history.push('/users/add')}>
        add your first user
      </button>
      <a
        className="learn-more"
        target="_blank"
        rel="noopener noreferrer"
        href="https://support.jumpcloud.com/customer/en/portal/articles/2778996-getting-started-users"
      >
        learn more
      </a>
      <Route
        exact
        path="/users/add"
        render={() => (
          <NewUserForm history={history} users={users} saveNewUser={saveNewUser} />
        )}
      />
    </section>
  );
};

export default UsersLanding;
