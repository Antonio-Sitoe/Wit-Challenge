import styled from 'styled-components';
import { Orange } from '../../styles/Colors';

export const Wrapper = styled.form`
  margin: 3rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6rem;
  gap: 1rem;

  @media (max-width: 360px) {
    grid-template-columns: 1fr;

    button {
      padding: 1rem;
    }
  }
`;
export const InputStyle = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 0.6rem;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${Orange};
  }
`;
export const BTN = styled.button`
  border: 1px solid transparent;
  background: ${Orange};
  color: whitesmoke;
  cursor: pointer;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid currentColor;
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

export const Erro = styled.p`
  text-align: left;
  color: tomato;
`;
