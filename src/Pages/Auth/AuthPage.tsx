import React from 'react'

import { AuthButton } from '../../Components/Button/AuthButton'
import { FeatureCarousel } from '../../Components/Caroussel/Carousel'
import { AuthTextInput } from '../../Components/Input/AuthInput'
import { Logo } from '../../Components/Logo/Logo'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import url from './layered-waves-haikei (1).svg'

import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  height: 80vh;
  width: 70vw;
  flex-direction: row;
  justify-content: space-between;

  background: rgb(255, 210, 207);
  background: linear-gradient(172deg, rgba(255, 210, 207, 1) 0%, rgba(213, 80, 118, 1) 100%);
  padding: 10vh 15vw;
`

const Column = styled.div<{ bgColor?: string; width: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 15px 15px 10px rgba(245, 90, 90, 0.8);

  aspect-ratio: 600/900;
  height: 100%;
  width: ${(props) => props.width}%;

  background-color: ${(props) => props.bgColor || 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => (props.bgColor ? 'none' : `url('${url}')`)};
  text-align: center;

  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`

const Span = styled.span`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;

  color: #000000;
`

const Blur = styled.div<{ align: string }>`
  width: 95%;
  background-color: rgb(135, 203, 252, 0.69);
  border-radius: 10px;
  text-align: ${(props) => props.align};

  margin: 1% 0;
  padding: 15px 7px;
`

export const AuthPage = () => {
  return (
    <Page>
      <Column width={65}>
        <Logo fontSize={108} />
        <Blur align="left">
          <Span>
            <b>Karakuli</b> - платформа для изучения японского языка, применяющая технологию
            интервальных повторений для достижения быстрого результата
          </Span>
        </Blur>
        <Blur align="center">
          <Span>Доступен следующий функционал:</Span>
        </Blur>
        <FeatureCarousel />
      </Column>
      <Column bgColor="#303030" width={35}>
        <AuthTextInput
          title={'Почта'}
          icon={{
            imageLink:
              'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/envelope_2709-fe0f.png',
          }}
          type="email"
        />
        <AuthTextInput
          title={'Логин'}
          icon={{
            imageLink:
              'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/bust-in-silhouette_1f464.png',
          }}
        />
        <AuthTextInput
          title={'Пароль'}
          icon={{
            imageLink:
              'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/302/locked_1f512.png',
          }}
          type="password"
        />
        <AuthTextInput
          title={'Повторите пароль'}
          icon={{
            imageLink:
              'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/302/locked_1f512.png',
          }}
          type="password"
        />
        <AuthButton>Создать аккаунт</AuthButton>
      </Column>
    </Page>
  )
}
