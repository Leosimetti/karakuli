import React, { useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import WanakanaInput_ from 'react-wanakana'

import { Review } from '../CharacterDisplay/CharacterDisplay'

import styled from 'styled-components'

const InputWrapper = styled.div`
  //width: 900px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`
const colors = {
  correct: '#3FDB4F',
  wrong: '#E53C3C',
}

const WanakanaInput = styled(WanakanaInput_)<{ status: 'correct' | 'wrong' }>`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  background-color: ${(props) => colors[props.status] || '#606060'};
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
  callback: (value: number, value2: string) => void
  review: Review
  status?: string
  testId?: string
  maxLength?: number
}

type KeyboardElementEvent = {
  key: string
  target: { value: unknown }
}

const Input = ({ className, callback, testId, review, ...rest }: InputProps) => {
  const [status, setStatus] = useState('')
  const handleKeyDown = (e: KeyboardElementEvent) => {
    if (e.key === 'Enter') {
      const expectedVal = review.type === 'meaning' ? review.meaning : review.reading

      const newVal = e.target.value === expectedVal
      setStatus(newVal ? 'correct' : 'wrong')
      if (newVal) callback(review.lesson_id, review.type)
      else setTimeout(() => alert(`Correct answer is ${expectedVal}`), 10)
    }
  }

  useEffect(() => {
    setStatus('')
  }, [review])

  const input = (
    <WanakanaInput
      id="wanakana_input"
      to={review.type !== 'reading' ? 'romaji' : ''}
      data-testid={testId}
      placeholder="Введите ответ"
      onKeyDown={handleKeyDown}
      status={status}
      autoComplete="off"
      {...rest}
    />
  )

  return <InputWrapper className={className}>{input}</InputWrapper>
}

export default Input
