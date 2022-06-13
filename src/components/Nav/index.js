import React from 'react';
import { StyledHeader, NavBar, Tab } from './styled';
import { Container } from '../../theme/layout';
import Logo from '../Logo';

const Nav = () => (
  <StyledHeader>
    <Container>
      <NavBar>
        <Tab to="/work">Work</Tab>
        <Tab to="/">
          <Logo />
        </Tab>
        <Tab to="/about">About</Tab>
      </NavBar>
    </Container>
  </StyledHeader>
);

export default Nav;
