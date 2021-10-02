import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CharacterDisplay_ from '../../Components/CharacterDisplay'
import { NavBar } from '../../Components/NavBar/NavBar'
import Input_ from '../../Components/ReviewInput'
import { selectors } from '../../Data/Slices/userdata'

import { getReviews } from './Review.utils'

import styled from 'styled-components'

const CharacterDisplay = styled(CharacterDisplay_)`
  background-color: #606060;
  margin: 15px auto auto;
`

const Input = styled(Input_)`
  background-color: #606060;
  margin: 15px auto auto;
`
const Wrapper = styled.div`
  height: 100%;
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

export default function ReviewPage() {
  const userToken = useSelector(selectors.accessToken)

  const [reviews, setReviews] = useState([])
  const [message, setMessage] = useState('')
  const [input, setInput] = useState('')
  const [position, setPosition] = useState(0)

  useEffect(() => {
    userToken &&
      getReviews(userToken).then((data) => {
        setReviews(data)
        setMessage('No more reviews')
      })
  }, [getReviews])

  useEffect(() => {
    setInput('')
  }, [position])

  return (
    <Wrapper>
      <NavBar />
      {reviews.length > 0 ? (
        <Grid>
          {position > 0 && (
            <ArrowLeft onClick={() => setPosition(position > 0 ? position - 1 : position)}>
              ➤
            </ArrowLeft>
          )}
          <Main>
            <CharacterDisplay review={reviews[position]} />
            <Input callback={alert} maxLength={20} review={reviews[position]} value={input} />
          </Main>
          {position < reviews.length - 1 && (
            <ArrowRight
              onClick={() => setPosition(position < reviews.length - 1 ? position + 1 : position)}
            >
              ➤
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
