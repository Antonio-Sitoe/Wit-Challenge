import React from 'react';
import useFetch from '../Hooks/useFetch';
import { BASE_URL } from '../Services/Api';
import RandomCity from './RandomCity';
import FilterDates from '../Pages/List/Filter';
import useLocalStorage from '../Hooks/useLocalStorage';

export const UserContext = React.createContext();
export const GlobalContext = ({ children }) => {
  const [local, setLocal] = useLocalStorage('metric', 0);
  const [weather, setWeather] = React.useState(null);
  const { request, loading, erro } = useFetch();
  const [grapic, setGrapic] = React.useState(null);
  const [toogleConvert, setToogleConvert] = React.useState(0);

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

  function Converter(value) {
    const defaultValue = Number(value) - 273.15;
    if (toogleConvert === 0) return `${Math.ceil(defaultValue)}°C`;
    else return `${Math.ceil(defaultValue * 1.8 + 32)}°F`;
  }

  React.useEffect(() => {
    setToogleConvert(local);
  }, [local]);

  const value = {
    weather,
    setWeather,
    Converter,
    loading,
    erro,
    grapic,
    setGrapic,
    setToogleConvert,
    toogleConvert,
    local,
    setLocal,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
