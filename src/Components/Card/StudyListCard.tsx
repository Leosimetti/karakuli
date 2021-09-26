import * as React from 'react'

import styled from 'styled-components'

type StudyListCardProps = {
  title: string
  pictureLink: string
  username: string
  description: string
}

const Card = styled.div`
  width: 800px; //TODO
  height: 165px;

  background-color: #4d194d;
  border: 1px solid #4d194d;
  border-radius: 6px;
  display: flex;
`

const Picture = styled.img`
  height: 165px;
  width: 165px;
`

const Username = styled.div`
  font-size: 10px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.div`
  font-size: 20px;
  width: 100%;
  text-align: center;
`

const Description = styled.div`
  font-size: 20px;
  height: 100%;
`

export const StudyListCard = ({
  title,
  pictureLink,
  username,
  description,
}: StudyListCardProps) => {
  return (
    <Card>
      <div>
        <Picture src={pictureLink} />
        <Username>{username}</Username>
      </div>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  )
}
