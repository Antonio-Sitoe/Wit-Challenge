import React from 'react';
import Card from './Components/Card/Card';
import MultiCards from './Components/MultCards/MultiCards';
import Sumary from '../../Components/Sumary/Sumary';
import { Container } from '../../styles/Reset';
import Header from '../../Components/Header/Header';
import { UserContext } from '../../Context/UserContext';
import PeriodsCards from '../../Components/PeriodsCards/PeriodsCards';
import Loading from '../../Components/Loading/Loading';
import { Erro } from '../../Components/Form/Styles';

const Home = () => {
  const { weather, Converter, erro } = React.useContext(UserContext);
  if (erro)
    return (
      <Container>
        <Erro>{erro}</Erro>
      </Container>
    );
  if (weather)
    return (
      <Container>
        <Header title={`${weather.city.name}, ${weather.city.country}`} />
        <Card weather={weather} Converter={Converter} />
        <MultiCards weather={weather} />
        <Sumary title='Periods of the day' />
        <PeriodsCards />
      </Container>
    );
  return <Loading />;
};

export default Home;
