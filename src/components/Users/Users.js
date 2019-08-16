import React, { useState, useEffect } from 'react';
import UsersLanding from './UsersLanding/UsersLanding';
import SearchBar from './SearchBar/SearchBar';
import UserList from './UsersList/UserList';

const Users = ({ history }) => {
  const [users, saveUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8005/api/systemusers')
      .then(res => res.json())
      .then(({ results }) => saveUsers(results))
      .catch(e => setError(e));
  }, []);

  const selectAll = e => {
    const selected = e.target.checked ? users.map(u => u.id) : [];
    setSelected(selected);
  };

  const selectUser = (e, id) => {
    const users = e.target.checked
      ? selected.concat(id)
      : selected.filter(v => v !== id);
    setSelected(users);
  };

  if (error) return <span>{error}</span>;
  if (!users.length) return <UsersLanding history={history} />;

  return (
    <>
      <SearchBar history={history} selected={selected} count={users.length} />
      <UserList
        users={users}
        selectUser={selectUser}
        selectAll={selectAll}
        selected={selected}
      />
    </>
  );
};

export default Users;
