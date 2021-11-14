import React from 'react';
import useFetch from '../Hooks/useFetch';
import { BASE_URL } from '../Services/Api';
import RandomCity from './RandomCity';
import FilterDates from '../Pages/List/Filter';

export const UserContext = React.createContext();
export const GlobalContext = ({ children }) => {
  const [weather, setWeather] = React.useState(null);
  const { request, loading, erro } = useFetch();
  const [grapic, setGrapic] = React.useState(null);

  React.useEffect(() => {
    async function getDefaultCity() {
      const { url, options } = BASE_URL(RandomCity());
      const { response, json } = await request(url, options);
      if (response && response.ok) {
        setWeather(json);
        setGrapic(FilterDates(json.list, 0));
      }
    }
    let amount = true;
    if (amount) getDefaultCity();
    return () => (amount = false);
  }, [request]);

  function Converter(value, option = 0) {
    const defaultValue = Number(value) - 273.15;
    return option === 1
      ? `${Math.ceil(defaultValue * 1.8 + 32)}°F`
      : `${Math.ceil(defaultValue)}°C`;
  }
  const value = {
    weather,
    setWeather,
    Converter,
    loading,
    erro,
    grapic,
    setGrapic,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
