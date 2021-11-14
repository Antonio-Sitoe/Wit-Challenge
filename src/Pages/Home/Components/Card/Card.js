import React from 'react';
import {
  CardContainer,
  Cardfooter,
  CardHeader,
  CardMain,
  ToogleButton,
  ToogleContainer,
} from './CardStyle';
import { ReactComponent as Location } from '../../../../Images/location.svg';
import Image from '../../../../Components/Image/Image';
import { UserContext } from '../../../../Context/UserContext';

const Card = ({ weather, Converter }) => {
  const { icon } = weather.list[0].weather[0];
  const { setToogleConvert, toogleConvert, setLocal } =
    React.useContext(UserContext);

  function handleToogle() {
    setToogleConvert((element) => (element === 0 ? 1 : 0));
  }
  React.useEffect(() => {
    setLocal(toogleConvert);
  }, [toogleConvert, setLocal]);

  return (
    <CardContainer>
      <CardHeader>
        <h2>Today</h2>
        <p>
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </CardHeader>
      <CardMain>
        <h1>{Converter(weather.list[0].main.temp)}</h1>
        <Image src={icon} alt='icon whether' />
      </CardMain>
      <Cardfooter>
        <span>
          <Location />
          <p>{`${weather.city.name}, ${weather.city.country}`}</p>
        </span>
        <ToogleContainer onClick={handleToogle}>
          Celsius
          <ToogleButton left={toogleConvert === 1 ? '2.5rem' : '0'}>
            <span></span>
          </ToogleButton>
          Fahrenheit
        </ToogleContainer>
      </Cardfooter>
    </CardContainer>
  );
};

export default Card;
