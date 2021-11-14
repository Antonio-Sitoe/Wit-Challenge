import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      setErro(null);
      response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);
      json = await response.json();
    } catch (error) {
      json = null;
      setErro(error);
    } finally {
      setLoading(false);
      setData(json);
      return { json, response };
    }
  }, []);

  return { data, erro, loading, request };
};

export default useFetch;
