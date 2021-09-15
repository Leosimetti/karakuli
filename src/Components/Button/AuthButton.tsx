import * as React from 'react'
import { MouseEventHandler } from 'react'

import styled from 'styled-components'

const Button = styled.button`
  background-color: #606060;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 15px;

  width: 80%;
  height: 100px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 75px;

  align-items: center;
  text-align: center;

  color: #ffffff;

  &:hover,
  &:focus,
  &:active {
    background-color: #9b9b9b;
  }
  &:active {
    color: #303030;
  }
`

type AuthButtonProps = {
  children: React.ReactNode
  onClick?: MouseEventHandler
}

export const AuthButton = ({ children, onClick }: AuthButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>
}
