import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import UsersLanding from './UsersLanding/UsersLanding';
import SearchBar from './SearchBar/SearchBar';
import UserList from './UsersList/UserList';
import NewUserForm from './NewUserForm/NewUserForm';

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
    const users = e.target.checked ? selected.concat(id) : selected.filter(v => v !== id);
    setSelected(users);
  };

  const updateUser = user => {
    const updated = users.map(obj => (obj.id === user.id ? { ...obj, ...user } : obj));
    saveUsers(updated);
  };

  const saveNewUser = user => saveUsers(users.concat(user));

  if (error) return <span>{error}</span>;
  if (!users.length) return <UsersLanding history={history} />;
  console.log('USERS: ', users);
  return (
    <>
      <SearchBar history={history} selected={selected} count={users.length} />
      <UserList
        history={history}
        users={users}
        selectUser={selectUser}
        selectAll={selectAll}
        selected={selected}
      />
      <Route
        path="/users/:id/details"
        render={({ match }) => (
          <NewUserForm
            history={history}
            data={users.find(user => user.id === match.params.id)}
            id={match.params.id}
            updateUser={updateUser}
          />
        )}
      />
      <Route
        exact
        path="/users/add"
        render={() => <NewUserForm users={users} saveNewUser={saveNewUser} />}
      />
    </>
  );
};

export default Users;
