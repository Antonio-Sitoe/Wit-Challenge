import React from 'react';
import { Link } from 'react-router-dom';
import { FooterMain, FooterStyle } from './FooterStyle';
import { ReactComponent as HomeImage } from '../../Images/home.svg';
import { ReactComponent as Lists } from '../../Images/list.svg';
import { ReactComponent as Maps } from '../../Images/map.svg';
import { ReactComponent as Search } from '../../Images/search.svg';
import { Container } from '../../styles/Reset';
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <FooterMain>
          <Link to='/'>
            <HomeImage />
          </Link>
          <Link to='search'>
            <Search />
          </Link>
          <Link to='list'>
            <Lists />
          </Link>
          <Link to='graph'>
            <Maps />
          </Link>
        </FooterMain>
      </Container>
    </FooterStyle>
  );
};
export default Footer;
