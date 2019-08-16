import { useState } from 'react';

const useInput = (initalState = '') => {
  const [value, setValue] = useState(initalState);

  return {
    value,
    handleChange: e => setValue(e.target.value),
  };
};

export default useInput;
