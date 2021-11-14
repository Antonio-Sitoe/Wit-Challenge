import React from 'react';

const types = {
  city: {
    regex: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
    message: 'Invalid City',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError('Empty field');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return { value, setValue, error, onChange, validate: () => validate(value) };
};

export default useForm;
