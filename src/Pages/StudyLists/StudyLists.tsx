import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { StudyListCard } from '../../Components/Card/StudyListCard'
import { NavBar } from '../../Components/NavBar/NavBar'
import { chooseList } from '../../Data/api/actioncreators/chooseList'
import { selectors } from '../../Data/Slices/userdata'
import { URLs } from '../../Routing/urls'

import { getLists, studyList } from './StudyLists.utils'

import styled from 'styled-components'

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;

  width: 100%;
  height: 100vh; //100%;;

  background-color: #303030;
`

const CardWrapper = styled.div`
  width: calc(50% - 20px);
  margin: 10px;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StudyLists = () => {
  const userToken = useSelector(selectors.accessToken)
  const [lists, setLists] = useState<studyList[]>([])
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    getLists().then((data) => setLists(data))
  }, [getLists])

  return (
    <MainPage>
      <NavBar />
      <CardsContainer>
        {lists.map(({ description, id, name, img_url }: studyList) => (
          <CardWrapper key={id}>
            <StudyListCard
              title={name}
              pictureLink={img_url}
              description={description}
              id={id}
              onClick={() => {
                userToken && dispatch(chooseList(id, userToken, () => history.push(URLs.dashboard)))
              }}
            />
          </CardWrapper>
        ))}
      </CardsContainer>
    </MainPage>
  )
}
