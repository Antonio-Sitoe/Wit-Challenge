import React from 'react';
import { H2 } from '../../styles/Reset';
import { SumaryContainer } from './SumaryStyle';

const Sumary = ({ title, day }) => {
  return (
    <SumaryContainer>
      <H2>{title}</H2>
      {day && <p>{day}</p>}
    </SumaryContainer>
  );
};

export default Sumary;
