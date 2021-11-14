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

const Card = ({ weather, Converter }) => {
  const { icon } = weather.list[0].weather[0];
  const [toogle, SetToogle] = React.useState(false);

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
        <ToogleContainer onClick={() => SetToogle((toogle) => !toogle)}>
          Celcius
          <ToogleButton left={toogle ? '2.5rem' : '0'}>
            <span></span>
          </ToogleButton>
          Farinheit
        </ToogleContainer>
      </Cardfooter>
    </CardContainer>
  );
};

export default Card;
