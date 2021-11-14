import React from 'react';
import Header from '../../Components/Header/Header';
import Loading from '../../Components/Loading/Loading';
import { Container } from '../../styles/Reset';
import Head from '../../Hooks/Head';
const Graps = React.lazy(() => import('./Graphic'));

const Graph = () => {
  return (
    <Container>
      <React.Suspense fallback={<Loading></Loading>}>
        <Header title='Follow an evolution through graphics' />
        <Graps />
      </React.Suspense>
       <Head title="Current Graphic" descritption="grafic" />
    </Container>
  );
};

export default Graph;
