import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AuthButton } from '../../Components/Button/AuthButton'
import { AuthNavButton } from '../../Components/Button/AuthNavButton'
import { FeatureCarousel } from '../../Components/Caroussel/Carousel'
import { AuthTextInput } from '../../Components/Input/AuthInput'
import { Logo } from '../../Components/Logo/Logo'
import { registerData, submitHandle } from '../../Data/api/actioncreators/register'

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
  min-height: 540px;
  min-width: 600px;

  background: rgb(255, 210, 207);
  background: linear-gradient(172deg, rgba(255, 210, 207, 1) 0%, rgba(213, 80, 118, 1) 100%);
  padding: 10vh 15vw;

  @media (max-width: 1200px) {
    height: 85vh;
    width: 75vw;
    padding: 7.5vh 12.5vw;
  }

  @media (max-width: 992px) {
    height: 85vh;
    width: 85vw;
    padding: 7.5vh 7.5vw;
  }

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    padding: 0;
  }

  @media (max-height: 820px) {
    height: 90vh;
    width: 90vw;
    padding: 5vh 5vw;
  }

  @media (max-height: 680px) {
    height: 100vh;
    width: 100vw;
    padding: 0;
  }
`;

const Column = styled.div<{ bgColor?: string; width: number }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 15px 15px 10px rgba(169, 86, 86, 0.8);

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

  @media (max-width: 768px) {
    &:first-child,
    &:last-child {
      border-radius: 0;
    }
  }
  @media (max-height: 680px) {
    &:first-child,
    &:last-child {
      border-radius: 0;
    }
  }
`;

const Span = styled.span`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 32px;

  color: #000000;
  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 26px;
  }
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }

  @media (max-height: 800px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const Blur = styled.div<{ align: string }>`
  width: 95%;
  background-color: rgb(135, 203, 252, 0.69);
  border-radius: 10px;
  text-align: ${(props) => props.align};

  //margin: 1% 0;
  padding: 15px 7px;
`;

const AuthNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  width: 100%;
`;

const AuthContainer = styled.div`
  width: 80%;
  margin: 20px 0;
`;

export const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<'login' | 'register'>('login');
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });
  const dispatch = useDispatch();

  async function onSubmit(data: registerData) {
    // console.log(data)
    dispatch(submitHandle(data, currentForm));
  }

  return (
    <Page>
      <Column width={60}>
        <Logo size="big" />
        <Blur align="left">
          <Span>
            <b>Karakuli</b>
            {' '}
            - платформа для изучения японского языка, применяющая технологию
            интервальных повторений для достижения быстрого результата
          </Span>
        </Blur>
        <Blur align="center">
          <Span>Доступен следующий функционал:</Span>
        </Blur>
        <FeatureCarousel />
      </Column>
      <Column bgColor="#303030" width={40}>
        <AuthContainer>
          <AuthNav>
            <AuthNavButton active={currentForm === 'login'} onClick={() => setCurrentForm('login')}>
              Login
            </AuthNavButton>
            <AuthNavButton
              active={currentForm === 'register'}
              onClick={() => setCurrentForm('register')}
            >
              Register
            </AuthNavButton>
          </AuthNav>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <AuthTextInput
                title="Почта"
                icon={{
                  imageLink:
                    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/envelope_2709-fe0f.png',
                }}
                type="email"
                registerName="email"
              />

              {currentForm === 'register' && (
                <AuthTextInput
                  title="Логин"
                  icon={{
                    imageLink:
                      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/bust-in-silhouette_1f464.png',
                  }}
                  registerName="username"
                />
              )}
              <AuthTextInput
                title="Пароль"
                icon={{
                  imageLink:
                    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/302/locked_1f512.png',
                }}
                type="password"
                registerName="password"
              />

              {currentForm === 'register' && (
                <AuthTextInput
                  title="Повторите пароль"
                  icon={{
                    imageLink:
                      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/302/locked_1f512.png',
                  }}
                  type="password"
                  registerName="passwordConfirm"
                  validate={(input) =>
                    // typescript error with documented utilization of library
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //  @ts-ignore
                    (input === methods.watch('password') ? true : 'Пароли должны совпадать')}
                />
              )}
              <AuthButton>{currentForm === 'register' ? 'Создать аккаунт' : 'Войти'}</AuthButton>
            </form>
          </FormProvider>
        </AuthContainer>
      </Column>
    </Page>
  );
};
