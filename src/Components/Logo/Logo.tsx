import React from 'react'

import styled from 'styled-components'

const Text = styled.span<{ fontSize: number }>`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.fontSize}px;
  line-height: 127px;
  user-select: none;
  color: #f18c9c;
  text-shadow: 1px 1px 2px red, 0 0 1em #f18c9c, 0 0 0.2em #f18c9c;
`

export const Logo = (props: { fontSize: number }) => {
  return <Text fontSize={props.fontSize}>カラクリ</Text>
}
