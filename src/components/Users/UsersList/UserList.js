import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.scss';

const UserList = ({ history, users, selectUser, selectAll, selected }) => {
  const handleClick = (e, id) => {
    if (e.target.id !== id) history.push(`/users/${id}/details`);
  };
  return (
    <div className="user-list">
      <div className="header">
        <input
          type="checkbox"
          checked={selected.length === users.length}
          onChange={e => selectAll(e)}
        />
        <span className="col col-xs">Status</span>
        <span className="col col-s">Name</span>
        <span className="col col-s">Email</span>
        <span className="col col-l">MFA Status</span>
        <span className="col col-l">Password Expiry</span>
      </div>
      <ul>
        {users.map(user => {
          const checked = selected.indexOf(user.id) > -1;
          return (
            <li
              key={user.id}
              className={checked ? 'user selected' : 'user'}
              onClick={e => handleClick(e, user.id)}
            >
              <input
                id={user.id}
                type="checkbox"
                checked={checked}
                onChange={e => selectUser(e, user.id)}
              />
              <span className="col col-xs">
                <i
                  className="material-icons"
                  style={{ backgroundColor: user.activated ? '#2cc692' : '#ffb000' }}
                >
                  {user.activated ? 'check' : 'more_horiz'}
                </i>
              </span>
              <div className="col col-s vertical">
                <span className="primary">{`${user.firstname} ${user.lastname}`}</span>
                <span className="secondary">{user.username}</span>
              </div>
              <span className="col col-s">{user.email}</span>
              <span className="col col-l">{user.mfa.configured}</span>
              <span className="col col-l">
                {user.password_expired || <i className="material-icons">remove</i>}
              </span>
              <Link to={`/users/${user.id}/details`}>
                <i className="material-icons">keyboard_arrow_right</i>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
