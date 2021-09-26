import React from 'react'

import styled from 'styled-components'

const Button = styled.div<{ leftColor: string; rightColor: string }>`
  display: flex;
  flex-direction: row;

  width: 806px;
  height: 181px;
  background-color: ${(props) => props.rightColor};

  box-sizing: border-box;
  border-radius: 40px;
  border: 5px solid ${(props) => props.rightColor};

  user-select: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  div:first-child {
    flex-grow: 1;
    background-color: ${(props) => props.leftColor};
    border-radius: 40px 0 0 40px;
  }
`

const Text = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  text-align: center;

  cursor: pointer;
  color: #ffffff;

  span {
    margin: 20px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  border-radius: 40px;

  margin: 20px;
  color: #303030;
`

interface Props {
  className?: string
  amount: number
  text: string
  leftColor: string
  rightColor: string
}

export const DashboardMainButton = ({ className, text, amount, leftColor, rightColor }: Props) => {
  return (
    <Button className={className} leftColor={leftColor} rightColor={rightColor}>
      <Text>
        <span>{text}</span>
      </Text>
      <Content>
        <span>Доступно уроков</span>
        <span>
          <b>{amount}</b>
        </span>
      </Content>
    </Button>
  )
}
