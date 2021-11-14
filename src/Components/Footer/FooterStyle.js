import styled from 'styled-components';
import { bgColor, bgColorSecundary } from '../../styles/Colors';
export const FooterStyle = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 5rem;
  padding: 1rem;
  z-index: 100;
  background: ${bgColor};
`;

export const FooterMain = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  a {
    background: ${bgColorSecundary};
    height: 3.5rem;
    border-radius: 0.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      path {
        stroke: orange;
      }
    }
  }
`;
