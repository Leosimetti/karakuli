import React from 'react';
import { Link } from 'react-router-dom';

import { URLs } from '../../Routing/urls'
import { Logo } from '../Logo/Logo'

import { UserMenu } from './UserMenu'

import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  background-color: white;

  a {
    text-decoration: none;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-shrink: 1;

  font-size: 30px;
  line-height: 30px;

  a {
    text-decoration: none;
    color: black;
    margin-top: 10px;
    margin-right: 40px;
  }
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;
const LogoWrapper = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavBar = () => (
  <Header>
    <Link to={URLs.dashboard}>
      <LogoWrapper>
        <Logo size="small" />
      </LogoWrapper>
    </Link>
    <Right>
      <Link to={URLs.studyLists}>Каталог</Link>
      <Link to={URLs.review}>Практика</Link>
      <Link to={URLs.lessons}>Уроки</Link>
      <UserMenu />
    </Right>
  </Header>
);
