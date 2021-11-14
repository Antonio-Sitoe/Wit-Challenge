import React from 'react';
import { HomeHeaderStyle } from './Style';

const Header = ({ title, descritption }) => {
  return (
    <HomeHeaderStyle>
      <h2>{title}</h2>
      {descritption && <p>{descritption}</p>}
    </HomeHeaderStyle>
  );
};

export default Header;
