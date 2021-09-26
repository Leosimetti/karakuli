import * as React from 'react'

import styled from 'styled-components'

const Button = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#9B9B9B' : '#444444')};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.active ? '#ffffff' : '#9B9B9B')};

  border: none;
  border-radius: 15px;
  margin: 10px 0;

  width: 100%;
  height: 60px;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 26px;

  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #9b9b9b;
    color: white;
    border: 3px #777777 solid;
  }

  @media (max-width: 1200px) {
    font-size: 20px;
    height: 50px;
  }
  @media (max-height: 800px) {
    font-size: 20px;
    height: 50px;
  }
`

type AuthNavButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
}

export const AuthNavButton = ({ children, onClick, active = false }: AuthNavButtonProps) => {
  return (
    <Button onClick={onClick} active={active}>
      {children}
    </Button>
  )
}
