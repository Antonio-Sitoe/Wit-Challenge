import styled from 'styled-components';
import { bgColorPrimary } from '../../styles/Colors';
export const CardLeft = styled.div`
  display: grid;
  gap: 2rem;
`;
export const DatesContainer = styled.div`
  padding: 3rem;
  background: ${bgColorPrimary};
  border-radius: 0.6rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  img {
    max-width: 3rem;
    margin: auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
export const DatesTemp = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
export const DatesLeft = styled.div`
  line-height: 1.5;
  margin: 0.3rem auto;
`;
