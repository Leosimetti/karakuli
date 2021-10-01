import * as React from 'react'

import styled from 'styled-components'

type StudyListCardProps = {
  id: number
  title: string
  pictureLink: string
  username?: string
  description: string
}

const Card = styled.div`
  width: 100%; //TODO
  height: 165px;

  position: relative;
  background-color: #4d194d;
  border: 1px solid #b43f9a;
  display: flex;
  cursor: pointer;
`

const Picture = styled.img`
  height: 165px;
  width: 165px;
  z-index: 0;
`

const Username = styled.div`
  font-size: 20px;
  color: white;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 165px);
  border-left: 1px #b43f9a solid;
`

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: #b43f9a;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
`

const Description = styled.div`
  overflow-wrap: break-word;
  font-size: 20px;
  height: 100%;
  width: 100%;
  background-color: #b43f9a;
  color: white;
  //font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  //line-height: 28px;
`

const Blur = styled.div<{ align: string }>`
  //width: 95%;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;
  text-align: ${(props) => props.align};

  padding: 5px 5px;

  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 1;
  width: calc(165px - 25px);
`

const TextWrapper = styled.div`
  margin: 10px 10px 0;
`

export const StudyListCard = ({
  title,
  pictureLink,
  username,
  description,
  id,
}: StudyListCardProps) => {
  function handleClick() {
    console.log(id)
  }

  return (
    <Card onClick={() => handleClick()}>
      <div>
        <Picture src={pictureLink} />
        <Blur align={'center'}>
          <Username>{username || 'VitaleK'}</Username>
        </Blur>
      </div>
      <Content>
        <Title>{title}</Title>
        <Description>
          <TextWrapper>{description}</TextWrapper>
        </Description>
      </Content>
    </Card>
  )
}
