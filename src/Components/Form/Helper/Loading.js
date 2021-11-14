import React from 'react';
import styled, { keyframes } from 'styled-components';
const animeInfinit = keyframes`
  to {
    transform:rotate(360deg)
  }
`;
const Load = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border-color: whitesmoke;
  border: 6px solid currentColor;
  border-right-color: transparent;
  animation: ${animeInfinit} 0.8s infinite;
`;

const Loading = () => {
  return <Load />;
};

export default Loading;
