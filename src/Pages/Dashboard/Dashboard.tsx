import React from 'react'
import { Link } from 'react-router-dom'

import { DashboardMainButton } from '../../Components/Button/DashboardMainButton'
import { DashboardSecondaryButton } from '../../Components/Button/DashboardSecondaryButton'
import { NavBar } from '../../Components/NavBar/NavBar'
import { URLs } from '../../Routing/urls'

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
  height: 100vh; //100%;;

  background-color: #303030;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  height: 30%;
`

const ButtonHor = styled(DashboardMainButton)`
  margin: 40px;
`

const ButtonVert = styled(DashboardSecondaryButton)`
  margin-top: 50px;
`

const Blur = styled.div`
  background-color: rgb(135, 203, 252, 0.69);
  border-radius: 10px;
  text-align: center;
  font-size: 35px;

  margin: 1% 0;
  padding: 15px 7px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Dashboard = () => {
  return (
    <Wrapper>
      <MainPage>
        <NavBar />
        <Center>
          <Blur>
            Your current study list is{' '}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">names</a>. You can change it here:{' '}
            <Link to={URLs.studyLists}>link</Link>
          </Blur>
        </Center>
        <Row>
          <ButtonHor
            text="Приступить к урокам"
            amount={42}
            rightColor="#8368ee"
            leftColor="#5238bc"
            url={URLs.lessons}
          />
          <ButtonHor
            text="Приступить к практике"
            amount={69}
            rightColor="#4FCFB7"
            leftColor="#218875"
            url={URLs.review}
          />
        </Row>
        {/*<Row>*/}
        {/*<ButtonVert url={URLs.progress} text="Прогресс" />*/}
        {/*<ButtonVert text="Настройки" />*/}
        {/*<ButtonVert text="Добавить" />*/}
        {/*<ButtonVert text="Поиск" />*/}
        {/*</Row>*/}
      </MainPage>
    </Wrapper>
  )
}
