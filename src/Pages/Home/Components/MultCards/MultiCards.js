import React from 'react';
import { UserContext } from '../../../../Context/UserContext';
import { Multicards } from './MultStyle';

const MultiCards = ({ weather }) => {
  const { Converter } = React.useContext(UserContext);
  const { temp_min, temp_max, humidity } = weather.list[0].main;
  const { all } = weather.list[0].clouds;
  if (weather)
    return (
      <Multicards>
        <div>
          <h2>Max temp</h2>
          {Converter(temp_max)}
        </div>
        <div>
          <h2>Min temp</h2>
          {Converter(temp_min)}?
        </div>
        <div>
          <h2>Humidity</h2>
          {`${humidity}%`}
        </div>
        <div>
          <h2>Clouds</h2>
          {all}
        </div>
      </Multicards>
    );
  return null;
};

export default MultiCards;
