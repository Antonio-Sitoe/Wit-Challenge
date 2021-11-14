import React from 'react';
import { Container } from '../../styles/Reset';
import { ReactComponent as PageError } from '../../Images/page404.svg';
import styled from 'styled-components';

const Main = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Page404 = () => {
  return (
    <Container>
      <Main>
        <div>
          <PageError />
          <h2>Page not found</h2>
        </div>
      </Main>
    </Container>
  );
};

export default Page404;
