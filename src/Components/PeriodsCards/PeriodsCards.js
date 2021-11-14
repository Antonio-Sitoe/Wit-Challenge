import React from 'react';
import { UserContext } from '../../Context/UserContext';
import Image from '../Image/Image';
import { Periods, SimpleCard } from './style';

const PeriodsCards = () => {
  const { weather, Converter } = React.useContext(UserContext);
  const ListOfWeather = weather.list.filter(({ dt_txt }) => {
    return new Date(dt_txt).getDate() === new Date().getDate();
  });

  return (
    <Periods>
      {ListOfWeather.map(({ dt_txt, main: { temp }, weather, dt }) => {
        return (
          <SimpleCard key={dt}>
            <Image src={weather[0].icon} alt='images' />
            <div>
              <h2>
                {new Date(dt_txt)
                  .toLocaleTimeString('en-US', { hour12: false })
                  .slice(0, 5)}
              </h2>
              <p>{Converter(temp)}</p>
            </div>
          </SimpleCard>
        );
      })}
    </Periods>
  );
};

export default PeriodsCards;
