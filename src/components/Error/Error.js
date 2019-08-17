import React from 'react';
import './Error.scss';

const Error = ({ text, setError }) => {
  return (
    <div className="error-wrapper">
      <button onClick={() => setError(null)}>
        <i className="material-icons">arrow_back</i>
      </button>
      <span>{text}</span>
    </div>
  );
};

export default Error;
