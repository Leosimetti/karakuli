import React from 'react'

import { DashboardMainButton } from '../../Components/Button/DashboardMainButton'
import { DashboardSecondaryButton } from '../../Components/Button/DashboardSecondaryButton'
import { NavBar } from '../../Components/NavBar/NavBar'

import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;

  //overflow-y: hidden;
`

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;

  width: 100%;
  height: 100%;

  background-color: #303030;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`

const ButtonHor = styled(DashboardMainButton)`
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
`

const ButtonVert = styled(DashboardSecondaryButton)`
  margin-top: 77px;
`

const Blur = styled.div`
  width: 40%;
  background-color: rgb(135, 203, 252, 0.69);
  border-radius: 10px;
  text-align: center;
  font-size: 35px;

  margin: 1% 0;
  padding: 15px 7px;
`

export const Dashboard = () => {
  return (
    <Wrapper>
      <NavBar />
      <MainPage>
        <Blur>Your current study list is MILF names. You can change it here: BENIS</Blur>
        <Row>
          <ButtonHor
            text="Приступить к урокам"
            amount={42}
            rightColor="#8368ee"
            leftColor="#5238bc"
          />
          <ButtonHor
            text="Приступить к практике"
            amount={69}
            rightColor="#4FCFB7"
            leftColor="#218875"
          />
        </Row>
        <Row>
          <ButtonVert text="Прогресс" />
          <ButtonVert text="Настройки" />
          <ButtonVert text="Добавить" />
          <ButtonVert text="Поиск" />
        </Row>
      </MainPage>
    </Wrapper>
  )
}
