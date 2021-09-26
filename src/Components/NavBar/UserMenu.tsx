import React from 'react'

import styled from 'styled-components'

const Name = styled.div`
  font-size: 40px;
  white-space: nowrap;
`

export const UserMenu = () => {
  return (
    <Name>
      ABOBA BEBRIN<button>▼</button>
    </Name>
  )
}
