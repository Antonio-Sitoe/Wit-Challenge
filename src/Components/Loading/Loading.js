import React from 'react';
import styled, { keyframes } from 'styled-components';

const Anime = keyframes`
to {
  transform:rotate(360deg)
}`;

const Load = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 4px solid whitesmoke;
  border-right-color: transparent;
  animation: infinite 0.9s ${Anime};
`;
const LoadContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadContainer>
      <Load />
    </LoadContainer>
  );
};

export default Loading;
