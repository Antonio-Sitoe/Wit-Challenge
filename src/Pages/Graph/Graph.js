import React from 'react';
import Header from '../../Components/Header/Header';
import { Container } from '../../styles/Reset';
import Graps from './Graphic';

const Graph = () => {
  return (
    <Container>
      <Header title='Follow an evolution through graphics' />
      <Graps />
    </Container>
  );
};

export default Graph;
