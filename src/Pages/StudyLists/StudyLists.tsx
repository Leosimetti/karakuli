import React, { useEffect, useState } from 'react'

import { StudyListCard } from '../../Components/Card/StudyListCard'
import { NavBar } from '../../Components/NavBar/NavBar'

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
  const [lists, setLists] = useState<studyList[]>([])

  useEffect(() => {
    getLists().then((data) => setLists(data))
  }, [getLists])

  return (
    <MainPage>
      <NavBar />
      <CardsContainer>
        {lists.map(({ description, id, name }: studyList) => (
          <CardWrapper key={id}>
            <StudyListCard
              title={name}
              pictureLink={
                'https://lh3.googleusercontent.com/proxy/TuyWP_h4w3SW2Satf3Q_9ay7i1xI9emvLKwd2D9up6-noNFknZKVek13cNsPNF6hhPYJ0c7sZNU2lOjhYYln3doPa9NyqkTLlyP1Zti0Trs35SQlPgDQ1qdN'
              }
              description={description}
              id={id}
            />
          </CardWrapper>
        ))}
      </CardsContainer>
    </MainPage>
  )
}
