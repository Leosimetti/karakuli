import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { DashboardMainButton } from '../../Components/Button/DashboardMainButton'
// import { DashboardSecondaryButton } from '../../Components/Button/DashboardSecondaryButton'
import { NavBar } from '../../Components/NavBar/NavBar'
import { selectors } from '../../Data/Slices/userdata'
import { URLs } from '../../Routing/urls'

import { AvailableItems, getAvailableItems, getStudyListName } from './Dashboard.utils'

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

// const ButtonVert = styled(DashboardSecondaryButton)`
//   margin-top: 50px;
// `

const Blur = styled.div`
  background-color: rgb(135, 203, 252, 0.69);
  border-radius: 10px;
  text-align: center;
  font-size: 35px;

  //margin: 1% 0;
  padding: 15px 7px;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Dashboard = () => {
  const [studyListName, setStudyListName] = useState('')
  const itemsInitState: AvailableItems = { lessons: 0, reviews: 0 }
  const [availableItems, setAvailableItems] = useState<AvailableItems>(itemsInitState)

  const loading = useSelector(selectors.isLoading)
  const studyListId = useSelector(selectors.listID)
  const userToken = useSelector(selectors.accessToken)

  useEffect(() => {
    userToken && getAvailableItems(userToken).then((data) => setAvailableItems(data))
    studyListId && getStudyListName(studyListId).then((data) => setStudyListName(data.name))
  }, [loading])

  return (
    <Wrapper>
      <MainPage>
        <NavBar />
        <Center>
          <Blur>
            Your current study list is{' '}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{studyListName}</a>. You can
            change it <Link to={URLs.studyLists}>here</Link>
          </Blur>
        </Center>
        <Row>
          <ButtonHor
            text="Приступить к урокам"
            amount={availableItems.lessons}
            rightColor="#8368ee"
            leftColor="#5238bc"
            url={URLs.lessons}
          />
          <ButtonHor
            text="Приступить к практике"
            amount={availableItems.reviews}
            rightColor="#4FCFB7"
            leftColor="#218875"
            url={URLs.review}
          />
        </Row>
        {/* <Row> */}
        {/* <ButtonVert url={URLs.progress} text="Прогресс" /> */}
        {/* <ButtonVert text="Настройки" /> */}
        {/* <ButtonVert text="Добавить" /> */}
        {/* <ButtonVert text="Поиск" /> */}
        {/* </Row> */}
      </MainPage>
    </Wrapper>
  )
}
