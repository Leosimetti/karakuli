import React from 'react'

import styled from 'styled-components'

const Display = styled.div`
  //width: 900px;
  height: 300px;

  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  justify-content: center;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`
// background-color: ${(p) => p.theme.educational.background};
// border: ${(p) => p.theme.educational.border};

const Char = styled.div`
  grid-row-start: 2;
  align-self: center;
  text-align: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 230px;
  line-height: 230px;
`
// color: ${(p) => p.theme.educational.char || p.theme.educational.color};

const QuestionType = styled.div<{ q_type: string }>`
  grid-row-start: 3;
  //background-color: rgb(0, 0, 0, 0.7);
  color: ${(props) => (props.q_type === 'meaning' ? 'cadetblue' : 'darkgrey')};
  text-align: center;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
`

export type Review = {
  lesson_id: number
  character: string
  reading: string
  meaning: string
  example: string
  type: string
}

type CharacterDisplayProps = {
  className?: string
  review: Review
}

const Reading = styled.div`
  grid-row-start: 1;

  text-align: center;
  height: 30px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 30px;
  margin-top: 5px;
`

const CharacterDisplay = ({ className, review }: CharacterDisplayProps) => {
  let display
  if (!review) {
    display = {
      id: -1,
      character: '🍆',
      reading: '',
      meaning: 'none',
      example: '',
      type: 'none',
    }
  } else {
    display = review
  }

  return (
    <Display className={className} data-testid="">
      <QuestionType q_type={display.type}>{display.type}</QuestionType>
      <Char>{display.character}</Char>
      <Reading>{display.type !== 'reading' ? display.reading : ''}</Reading>
    </Display>
  )
}

export default CharacterDisplay
