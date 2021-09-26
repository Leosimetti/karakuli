import React from 'react'

import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  flex-direction: column;

  width: 328px;
  height: 400px;
  background-color: #606060;

  box-sizing: border-box;
  border-radius: 40px;
  border: 5px solid #606060;

  user-select: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const Text = styled.div`
  flex-grow: 1;
  background-color: #c4c4c4;
  border-radius: 40px 40px 40px 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  cursor: pointer;

  span {
    margin: 20px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
`

interface Props {
  className?: string
  text: string
}

export const DashboardSecondaryButton = ({ className, text }: Props) => {
  return (
    <Button className={className}>
      <Text>
        <span>{text}</span>
      </Text>
      <div>
        <img src="https://i.pinimg.com/originals/02/c4/1b/02c41bba48a37de34145d0d1af34d40d.png" />
      </div>
    </Button>
  )
}
