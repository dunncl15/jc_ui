import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { get, del } from '../../api/api_client';
import UsersLanding from './UsersLanding/UsersLanding';
import SearchBar from './SearchBar/SearchBar';
import UserList from './UsersList/UserList';
import NewUserForm from './NewUserForm/NewUserForm';
import Error from '../Error/Error';

const Users = ({ history }) => {
  const [users, saveUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    get()
      .then(({ results }) => saveUsers(results))
      .catch(e => setError(e.text));
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

  const deleteHandler = async () => {
    try {
      const requests = selected.map(id => del(id));
      const responses = await Promise.all(requests);
      const ids = responses.reduce((acc, data) => {
        acc[data.id] = data.id;
        return acc;
      }, {});
      const remainingUsers = users.filter(user => typeof ids[user.id] !== 'string');
      saveUsers(remainingUsers);
      setSelected([]);
    } catch (e) {
      setError(e.text);
    }
  };

  if (error) return <Error text={error} setError={setError} />;
  if (!users.length)
    return (
      <UsersLanding history={history} saveNewUser={saveNewUser} setError={setError} />
    );

  return (
    <>
      <SearchBar
        history={history}
        selected={selected}
        count={users.length}
        deleteUser={deleteHandler}
      />
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
            setError={setError}
          />
        )}
      />
      <Route
        exact
        path="/users/add"
        render={() => (
          <NewUserForm history={history} saveNewUser={saveNewUser} setError={setError} />
        )}
      />
    </>
  );
};

export default Users;
