import React from 'react';
import useInput from '../../../hooks/useInput';
import './NewUserForm.scss';

const NewUserForm = ({ data = {}, id, history, saveNewUser, updateUser }) => {
  const { value: firstname, handleChange: setFirstName } = useInput(data.firstname);
  const { value: middlename, handleChange: setMiddleName } = useInput(data.middlename);
  const { value: lastname, handleChange: setLastName } = useInput(data.lastname);
  const { value: username, handleChange: setUserName } = useInput(data.username);
  const { value: displayname, handleChange: setDisplayName } = useInput(data.displayname);
  const { value: email, handleChange: setEmail } = useInput(data.email);
  const { value: description, handleChange: setDescription } = useInput(data.description);

  const handleSubmit = e => {
    e.preventDefault();
    const url = id
      ? `http://localhost:8005/api/systemusers/${id}`
      : 'http://localhost:8005/api/systemusers';
    const method = id ? 'PUT' : 'POST';
    const userData = {
      firstname,
      middlename,
      lastname,
      username,
      displayname,
      email,
      description,
    };
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        id ? updateUser(data) : saveNewUser(data);
        history.push('/users');
      });
  };

  return (
    <aside className="form-container">
      <button onClick={() => history.push('/users')}>X</button>
      <form>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={e => setFirstName(e)}
          />
          <label htmlFor="middlename">Middle Name</label>
          <input
            id="middlename"
            type="text"
            value={middlename}
            onChange={e => setMiddleName(e)}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={e => setLastName(e)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUserName(e)}
          />
          <label htmlFor="display-name">Display Name</label>
          <input
            id="display-name"
            type="text"
            value={displayname}
            onChange={e => setDisplayName(e)}
          />
          <label htmlFor="creation-date">User Creation Date</label>
          <input id="creation-data" readOnly type="text" value={data.created || ''} />
        </div>
        <div>
          <label htmlFor="email">Company Email</label>
          <input id="email" type="text" value={email} onChange={e => setEmail(e)} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            value={description}
            onChange={e => setDescription(e)}
          />
        </div>
        <button onClick={handleSubmit}>Save User</button>
      </form>
    </aside>
  );
};

export default NewUserForm;
