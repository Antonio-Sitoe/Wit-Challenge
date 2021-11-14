import styled from 'styled-components';
import {  bgColorPrimary } from '../../../../styles/Colors';

export const CardContainer = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1rem;
  background: ${bgColorPrimary};
  border-radius: 0.6rem;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    font-size: 2rem;
  }
`;
export const CardMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Ubuntu Mono', monospace;
  }

  img {
    max-width: 10rem;
  }

  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;
export const Cardfooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
    }
  }

  @media (max-width: 500px) {
    span {
      text-align: center;
      margin: 0 auto 1rem auto;
    }
  }
`;

export const ToogleButton = styled.div`
  width: 4rem;
  height: 1.5rem;

  border-radius: 0.6rem;
  border: 1px solid whitesmoke;

  span {
    width: 1.5rem;
    height: 1.4rem;
    border-radius: 0.6rem;
    background: whitesmoke;
    margin-left: ${(props) => props.left};
    transition: .4s;
  }
`;

export const ToogleContainer = styled.section`
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 500px) {
    text-align: center;
    margin: 1rem auto 0 auto;
  }
`;
