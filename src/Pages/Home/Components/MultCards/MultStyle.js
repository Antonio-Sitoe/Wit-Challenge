import styled from 'styled-components';
import { bgColorPrimary } from '../../../../styles/Colors';

export const Multicards = styled.main`
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  div {
    background: ${bgColorPrimary};
    border-radius: 0.6rem;
    height: 6rem;
    padding: 1rem;
    text-align: center;

    h2 {
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
      font-weight: bold;
    }
  }
`;
