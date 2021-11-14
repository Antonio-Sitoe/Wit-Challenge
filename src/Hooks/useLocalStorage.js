import React from 'react';

const useLocalStorage = (key, initial = '') => {
  const [local, setLocal] = React.useState(() => {
    const storage = window.localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(local));
  }, [local, key]);
  return [local, setLocal];
};

export default useLocalStorage;
