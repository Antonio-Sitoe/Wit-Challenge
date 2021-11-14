import React from 'react';
import Cards from '../../Components/Cards/Cards';
import Header from '../../Components/Header/Header';
import PeriodsCards from '../../Components/PeriodsCards/PeriodsCards';
import Sumary from '../../Components/Sumary/Sumary';
import { UserContext } from '../../Context/UserContext';
import { Container } from '../../styles/Reset';
import FilterDates from './Filter';
import Loading from '../../Components/Loading/Loading';

const List = () => {
  const { weather } = React.useContext(UserContext);

  if (!weather) return <Loading />;
  const lists = [
    FilterDates(weather.list, 0),
    FilterDates(weather.list, 1),
    FilterDates(weather.list, 2),
    FilterDates(weather.list, 3),
    FilterDates(weather.list, 4),
  ];

  return (
    <Container>
      <Header title='5 day weather forecast' />
      <Sumary
        title='Today'
        day={new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      />
      <PeriodsCards />
      <Cards lists={lists} />
    </Container>
  );
};

export default List;
