import React from 'react'
import { useSelector } from 'react-redux'

import { query } from '../../Data/api/queryTemplate'
import { API_URLS } from '../../Data/const/API_URLS'
import { selectors } from '../../Data/Slices/userdata'

import styled, { createGlobalStyle } from 'styled-components'

const InfoWrapper = styled.div`
  //width: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #606060;
  color: black;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const GlobalStyle = createGlobalStyle`
    h1, h2, h3 {
        margin: 0;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        color: #b9b9b9;
    }
`

const Translation = styled.h1`
  font-size: 48px;
`

const Tags = styled.h2`
  font-size: 18px;
  margin-top: 15px;
`

const Separator = styled.hr`
  width: 80%;
  height: 1px;
  box-sizing: border-box;
  border: none;
  margin: 25px 0;

  background: pink;
`

const JapText = styled.h3`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 25px;
  text-align: center;
`

const Button = styled.button`
  background-color: #b9b9b9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: black;
  width: 80%;

  border: none;

  border-radius: 15px;
  margin: 10px 0;

  font-size: 26px;
  line-height: 60px;
  height: 60px;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;

  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #9b9b9b;
  }
  &:active {
    color: #303030;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

type ItemInfoProps = {
  className?: string
  word: {
    id: number
    character: string
    reading: string
    meaning: string
    example: string
    lesson_id: number
  }
  testId: string
}
const ItemInfo = ({ className, word, testId }: ItemInfoProps) => {
  const userToken = useSelector(selectors.accessToken)
  if (!word) {
    word = {
      id: -1,
      character: '',
      reading: '',
      meaning: '',
      example: '',
      lesson_id: 0,
    }
  }

  return (
    <InfoWrapper className={className}>
      <GlobalStyle />
      <Separator />
      <Translation data-testid={`${testId}:translation`}>{word.meaning}</Translation>
      <Tags data-testid={`${testId}:tags`}>kanji</Tags>
      <Separator />
      <JapText data-testid={`${testId}:example`}>I love my {word.character}</JapText>
      <Separator />
      <Button
        type="button"
        onClick={() =>
          query({
            URL: `${API_URLS.reviews}?lesson_id=${word.lesson_id}`,
            method: 'POST',
            accessToken: userToken,
          })
        }
      >
        Добавить в практику
      </Button>
    </InfoWrapper>
  )
}

export default ItemInfo
