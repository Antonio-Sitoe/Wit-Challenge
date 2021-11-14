import React from 'react';
import Sumary from '../Sumary/Sumary';
import { CardLeft, DatesContainer, DatesLeft, DatesTemp } from './style';
import Image from '../../Components/Image/Image';
import SuperElements from './SuperElements';
import { UserContext } from '../../Context/UserContext';

const Cards = ({ lists }) => {
  const { Converter } = React.useContext(UserContext);
  const [, second, three, four, five] = lists;
  const SuperList = SuperElements(second[0], three[0], four[0], five[0]);
  return (
    <>
      <Sumary title='Next 4 Days' />
      <CardLeft>
        {SuperList.map(({ dt, weather: [{ icon }], main, dt_txt }) => {
          return (
            <DatesContainer key={dt}>
              <DatesLeft>
                {new Date(dt_txt).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </DatesLeft>
              <DatesTemp>{Converter(main.temp)}</DatesTemp>
              <Image src={icon} alt='image weather' />
            </DatesContainer>
          );
        })}
      </CardLeft>
    </>
  );
};

export default Cards;
