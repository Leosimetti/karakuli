import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WanakanaInput_ from 'react-wanakana'

import { Review } from '../CharacterDisplay/CharacterDisplay'

import styled from 'styled-components'

// const colors = {
//   correct: '#3FDB4F',
//   wrong: '#E53C3C',
// }

const InputWrapper = styled.div`
  //width: 900px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const WanakanaInput = styled(WanakanaInput_)`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  background-color: #606060;
  color: #cdcdcd;

  border: none;
  outline: none;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 25px;

  &::placeholder {
    color: #9b9b9b;
  }

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`
type InputProps = {
  className?: string
  callback: (value: unknown) => void
  review: Review
  value: string
  status?: string
  testId?: string
  maxLength?: number
}

type KeyboardElementEvent = {
  key: string
  target: { value: unknown }
}

const Input = ({ className, callback, status, testId, review, value, ...rest }: InputProps) => {
  const handleKeyDown = (e: KeyboardElementEvent) => {
    if (e.key === 'Enter') {
      callback(e.target.value)
    }
  }

  const input = (
    <WanakanaInput
      to={review.type !== 'reading' ? 'romaji' : ''}
      data-testid={testId}
      value={value}
      placeholder="Введите ответ"
      onKeyDown={handleKeyDown}
      status={status}
      {...rest}
    />
  )

  return <InputWrapper className={className}>{input}</InputWrapper>
}

export default Input
