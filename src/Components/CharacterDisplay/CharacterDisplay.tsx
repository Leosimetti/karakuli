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

type CharacterDisplayProps = {
  className?: string
  review: any
}

const CharacterDisplay = ({ className, review }: CharacterDisplayProps) => {
  if (!review) {
    review = {
      id: -1,
      character: '🍆',
      reading: '',
      meaning: 'none',
      example: '',
      type: 'none',
    }
  }

  return (
    <Display className={className}>
      <QuestionType q_type={review.type}>{review.type}</QuestionType>
      <Char>{review.character}</Char>
    </Display>
  )
}

export default CharacterDisplay
