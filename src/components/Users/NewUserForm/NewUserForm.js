import React from 'react';
import { post, put } from '../../../api/api_client';
import useInput from '../../../hooks/useInput';
import Input from '../../Input/Input';
import './NewUserForm.scss';

const NewUserForm = ({ data = {}, id, history, saveNewUser, updateUser, setError }) => {
  const { value: firstname, handleChange: setFirstName } = useInput(data.firstname);
  const { value: middlename, handleChange: setMiddleName } = useInput(data.middlename);
  const { value: lastname, handleChange: setLastName } = useInput(data.lastname);
  const { value: username, handleChange: setUserName } = useInput(data.username);
  const { value: displayname, handleChange: setDisplayName } = useInput(data.displayname);
  const { value: email, handleChange: setEmail } = useInput(data.email);
  const { value: description, handleChange: setDescription } = useInput(data.description);

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = {
      firstname,
      middlename,
      lastname,
      username,
      displayname,
      email,
      description,
    };
    try {
      const data = id ? await put(id, userData) : await post(userData);
      id ? updateUser(data) : saveNewUser(data);
      history.push('/users');
    } catch (e) {
      setError(e.text);
    }
  };

  return (
    <aside className="form-container">
      <button className="close-btn" onClick={() => history.push('/users')}>
        <i className="material-icons">close</i>
      </button>
      <form>
        <h3>User Information</h3>
        <div className="form-row">
          <Input
            id="firstname"
            type="text"
            value={firstname}
            onChange={setFirstName}
            label="First Name"
          />
          <Input
            id="middlename"
            type="text"
            value={middlename}
            onChange={setMiddleName}
            label="Middle Name"
          />
          <Input
            id="lastname"
            type="text"
            value={lastname}
            onChange={setLastName}
            label="Last Name"
          />
        </div>
        <div className="form-row">
          <Input
            id="username"
            type="text"
            value={username}
            onChange={setUserName}
            label="Username"
            required
          />
          <Input
            id="displayname"
            type="text"
            value={displayname}
            onChange={setDisplayName}
            label="Display Name"
          />
          <Input
            id="creation-date"
            type="text"
            value={data.created || ''}
            label="User Creation Date"
            readOnly
          />
        </div>
        <div className="form-row">
          <Input
            id="email"
            type="text"
            value={email}
            onChange={setEmail}
            label="Company Email"
            width="double"
            required
          />
        </div>
        <div className="form-row full">
          <label className="desc-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="desc-content"
            id="description"
            value={description}
            onChange={setDescription}
          />
        </div>
        <button className="cta-btn" onClick={handleSubmit} disabled={!username || !email}>
          Save User
        </button>
      </form>
    </aside>
  );
};

export default NewUserForm;
