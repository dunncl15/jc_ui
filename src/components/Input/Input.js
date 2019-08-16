import React from 'react';
import cx from 'classnames';
import './Input.scss';

const Input = ({ id, type, value, onChange, label, readOnly, width, required }) => {
  const wrapper = cx('input-wrapper', {
    [width]: Boolean(width),
  });
  const input = cx('input', {
    readonly: Boolean(readOnly),
  });
  return (
    <div className={wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        className={input}
        readOnly={readOnly}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
