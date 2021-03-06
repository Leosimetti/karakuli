import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CharacterDisplay_ from '../../Components/CharacterDisplay'
import { Review } from '../../Components/CharacterDisplay/CharacterDisplay'
import ItemInfo from '../../Components/ItemInfo'
import { NavBar } from '../../Components/NavBar/NavBar'
import { selectors } from '../../Data/Slices/userdata'

import { getLessons } from './Lessons.utils'

import styled from 'styled-components'

const CharacterDisplay = styled(CharacterDisplay_)`
  background-color: #606060;
  margin: 15px auto auto;
`

const Wrapper = styled.div`
  height: 100%;
  min-height: 800px;
  background-color: #303030;
  //min-width: 768px;
`
const ArrowRight = styled.span`
  display: flex;

  align-items: center;
  color: #f18c9c;
  user-select: none;
  cursor: pointer;
  font-size: 50px;
  margin: 50px;
  @media (max-width: 800px) {
    margin: 35px;
  }

  grid-area: right;
`

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
  grid-area: left;
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: 'left mid  right';
  grid-template-columns: 1fr 2.4fr 1fr;
`

const Main = styled.div`
  grid-area: mid;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  font-size: 88px;
  color: green;
`

export default function LessonsPage() {
  const userToken = useSelector(selectors.accessToken)

  const [lessons, setLessons] = useState([])
  const [message, setMessage] = useState('')
  const [position, setPosition] = useState(0)

  useEffect(() => {
    userToken &&
      getLessons(userToken, 5).then((data) => {
        setLessons(data)
        setMessage('No more lessons left')
      })
  }, [getLessons])

  const updateList = (lesson_id: number) => {
    if (position === lessons.length - 1) {
      setPosition(position - 1)
    }
    setLessons(lessons.filter((lesson: Review) => lesson.lesson_id !== lesson_id))
  }

  return (
    <Wrapper>
      <NavBar />
      {lessons.length > 0 ? (
        <Grid>
          {position > 0 && (
            <ArrowLeft onClick={() => setPosition(position > 0 ? position - 1 : position)}>
              ???
            </ArrowLeft>
          )}
          <Main>
            <CharacterDisplay review={lessons[position]} />
            <ItemInfo callback={updateList} testId="study:info" word={lessons[position]} />
          </Main>
          {position < lessons.length - 1 && (
            <ArrowRight
              onClick={() => setPosition(position < lessons.length - 1 ? position + 1 : position)}
            >
              ???
            </ArrowRight>
          )}
        </Grid>
      ) : (
        <Flex>
          <Message>{message}</Message>
        </Flex>
      )}
    </Wrapper>
  )
}
