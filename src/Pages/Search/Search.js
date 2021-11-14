import React from 'react';
import Input from '../../Components/Form/Input';
import Header from '../../Components/Header/Header';
import useForm from '../../Hooks/useForm';
import { Container } from '../../styles/Reset';
import { SeachContainer } from './style';
import useFetch from '../../Hooks/useFetch';
import { BASE_URL } from '../../Services/Api';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router';
import { Erro } from '../../Components/Form/Styles';
import Head from '../../Hooks/Head';

const Search = () => {
  const { setWeather } = React.useContext(UserContext);
  const navigate = useNavigate();
  const city = useForm('city');
  const { request, erro, loading } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (city.validate()) {
      const { url, options } = BASE_URL(city.value);
      const { json, response } = await request(url, options);

      if (response && response.ok) {
        setWeather(json);
        navigate('/');
      }
    }
  }

  return (
    <Container>
      <SeachContainer>
        <Header
          title='Pick location'
          descritption='Find the area or city that you want know the detailed weather info at this time'
        />
        <Input onSubmit={handleSubmit} {...city} loading={loading} />
        {erro && <Erro>{erro.toString()}</Erro>}
      </SeachContainer>
      <Head title="Pick location" descritption="Localization" />
    </Container>
  );
};

export default Search;
