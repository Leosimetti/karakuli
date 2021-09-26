import React from 'react'

import CharacterDisplay_ from '../../Components/CharacterDisplay'
import Input_ from '../../Components/ReviewInput'

import styled from 'styled-components'

const CharacterDisplay = styled(CharacterDisplay_)`
  margin: 15px auto auto;
`

const Input = styled(Input_)`
  margin: 15px auto auto;
`

export default function ReviewPage() {
  const review = {
    word: {
      id: -1,
      kanji: '🍆',
      readings: 'BU-BA',
      meaning: 'BEBRA',
      example: 'OH YEAH',
    },
  }

  return (
    <>
      <CharacterDisplay review={review} />
      <Input testId={'review:submit'} callback={alert} status={null} maxLength={20} />
    </>
  )
}
