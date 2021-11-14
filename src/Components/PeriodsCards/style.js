import styled from 'styled-components';
import { bgColorPrimary } from '../../styles/Colors';

export const Periods = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const SimpleCard = styled.div`
  background: ${bgColorPrimary};
  padding: 1rem;
  border-radius: 0.6rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;

  img {
    max-width: 6rem;
    margin: 0 auto;
  }

  div {
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 1.2rem;
      margin: 1rem 0;
    }
  }
`;
