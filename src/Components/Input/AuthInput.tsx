import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

type AuthTextInputProps = {
  id?: string
  title: string
  icon?: {
    text?: string
    imageLink?: string
  }
  link?: {
    href: string
    text: string
  }
  type?: 'text' | 'email' | 'password'
}

const Wrapper = styled.div`
  text-align: left;
  width: 80%;
  margin: 20px;
  position: relative;
`

const Title = styled.label<{ active: boolean }>`
  position: relative;
  left: 0;
  color: ${(props) => (props.active ? '#cdcdcd' : '#9b9b9b')};

  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`

const InputWrapper = styled.div<{ active: boolean }>`
  border-bottom: 6px solid;
  border-color: ${(props) => (props.active ? '#cdcdcd' : '#9b9b9b')};
  display: flex;
`

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;

  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;

  width: calc(100% - 40px);
  color: #9b9b9b;
  margin-bottom: 5px;
  margin-left: 5px;

  &:focus {
    color: #cdcdcd;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #303030 inset; /* Change the color to your own background color */
    -webkit-text-fill-color: #9b9b9b;
  }

  &:-webkit-autofill::first-line {
    font-family: Scada;
    font-size: 26px;
  }
`

const Span = styled.span`
  font-size: 32px;
  width: 40px;
  margin-bottom: 5px;
`

const Img = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 7px;
  margin-top: 2px;
`

export const AuthTextInput = ({ id, title, icon, link, type = 'text' }: AuthTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Wrapper>
      <Title htmlFor={id || title} active={isFocused}>
        {title}
      </Title>
      {link && <Link to={link.href}>{link.text}</Link>}
      <InputWrapper active={isFocused}>
        {icon &&
          (icon.imageLink ? <Img src={icon.imageLink} alt={title} /> : <Span>{icon.text}</Span>)}
        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
          id={id || title}
        />
      </InputWrapper>
    </Wrapper>
  )
}
