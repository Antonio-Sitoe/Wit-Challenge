import styled from 'styled-components';

export const HomeHeaderStyle = styled.header`
  margin: 3rem 0;
  text-align: center;
  h2 {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    margin: 2rem 0;

    h2 {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`;
