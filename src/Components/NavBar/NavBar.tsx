import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Logo/Logo'

import { UserMenu } from './UserMenu'

import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  a {
    text-decoration: none;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  background-color: white;
  font-size: 30px;

  a {
    text-decoration: none;
    color: black;
    margin-top: 10px;
    margin-right: 40px;
  }
`

export const NavBar = () => {
  return (
    <Header>
      <Link to="dashboard">
        <Logo size="small" />
      </Link>
      <Right>
        <Link to="dashboard">Практика</Link>
        <Link to="dashboard">Уроки</Link>
        <Link to="dashboard">Настройки</Link>
        <UserMenu />
      </Right>
    </Header>
  )
}
