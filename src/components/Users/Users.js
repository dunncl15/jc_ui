import React, { useState, useEffect } from 'react';
import background from '../../images/usersGettingStarted.svg';
import './Users.scss';

const Users = () => {
  const [users, saveUsers] = useState([]);
  const [count, saveCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8005/api/systemusers')
      .then(res => res.json())
      .then(({ totalCount, results }) => {
        saveUsers(results);
        saveCount(totalCount);
      })
      .catch(e => console.log('err: ', e));
  }, []);
  return (
    <section className="users--landing-page">
      <h3>Welcome to JumpCloud!</h3>
      <img className="default-img" src={background} alt="" />
      <p>
        Get started by adding users. Then give them secure access to any
        resource, including systems (Mac, Windows, Linux), directories (LDAP,
        GSuite), SSO applications, RADIUS networks (WiFi, VPN), and more.
      </p>
    </section>
  );
};

export default Users;
