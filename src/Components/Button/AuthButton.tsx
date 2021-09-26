import * as React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  background-color: #606060;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  width: 100%;

  border: none;

  border-radius: 15px;
  margin: 10px 0;

  font-size: 26px;
  line-height: 60px;
  height: 60px;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;

  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #9b9b9b;
  }
  &:active {
    color: #303030;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

type AuthButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const AuthButton = ({ children, onClick }: AuthButtonProps) => {
  return (
    <Button type={'submit'} onClick={onClick}>
      {children}
    </Button>
  )
}
