import React from 'react'
import WanakanaInput_ from 'react-wanakana'

import styled from 'styled-components'

const colors = {
  correct: '#3FDB4F',
  wrong: '#E53C3C',
}

const InputWrapper = styled.div`
  width: 900px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const WanakanaInput = styled(WanakanaInput_)`
  width: 900px;
  height: 65px;
  box-sizing: border-box;

  border: none;
  outline: none;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 25px;

  &::placeholder {
    color: var(--pink-pink);
  }
`
// background-color: ${(p) => colors[p.status] || p.theme.educational.background};
// color: ${(p) => p.theme.educational.color};

const Input = ({ className, callback, status, testId, ...rest }) => {
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      callback(e.target.value)
    }
  }

  const input = (
    <WanakanaInput
      data-testid={testId}
      placeholder="Введите ответ"
      onKeyDown={_handleKeyDown}
      status={status}
      {...rest}
    />
  )

  return <InputWrapper className={className}>{input}</InputWrapper>
}

export default Input
