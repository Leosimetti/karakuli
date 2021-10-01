import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

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
  registerName: string
  validate?:
  | ((value: string) => boolean | string)
  | {
    [key: string]: (value: string) => boolean | string
  }
};

const Wrapper = styled.div`
  text-align: left;
  width: 100%;
  margin: 10px 0;
  position: relative;
`;

const Title = styled.label<{ active: boolean }>`
  position: relative;
  left: 0;
  color: ${(props) => (props.active ? '#cdcdcd' : '#9b9b9b')};

  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-height: 800px) {
    font-size: 18px;
  }
`;

const InputWrapper = styled.div<{ active: boolean }>`
  border-bottom: 6px solid;
  border-color: ${(props) => (props.active ? '#cdcdcd' : '#9b9b9b')};
  display: flex;
`;

const Input = styled.input<{ error: boolean }>`
  background-color: transparent;
  outline: none;
  border: none;

  font-family: Scada;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  width: calc(100% - 40px);
  color: ${(props) => (props.error ? '#c70000' : '#9b9b9b')};
  margin-bottom: 5px;
  margin-left: 5px;
  animation: ${(props) => (props.error ? 'shake 0.2s ease-in-out 0s 3' : '')};

  @keyframes shake {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 0.3rem;
    }
    75% {
      margin-left: -0.3rem;
    }
    100% {
      margin-left: 0;
    }
  }

  &:focus {
    color: #cdcdcd;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #303030 inset; /* Change the color to your own background color */
    //-webkit-text-fill-color: #9b9b9b;
    -webkit-text-fill-color: ${(props) => (props.error ? '#c70000' : '#9b9b9b')};
  }

  &:-webkit-autofill::first-line {
    font-family: Scada;
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const Span = styled.span`
  font-size: 32px;
  width: 40px;
  margin-bottom: 5px;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
  margin-bottom: 7px;
  margin-top: 2px;
`;

const Error = styled.p`
  white-space: pre-wrap;
  color: #c70000;
  margin: 5px 0;
  font-size: 18px;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-height: 800px) {
    font-size: 14px;
  }

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const AuthTextInput = ({
  id,
  title,
  icon,
  link,
  type = 'text',
  registerName,
  validate = {
    minLength: (value: string) => (value.length > 4 ? true : 'Поле должно содержать более 4 символов'),
    maxLength: (value: string) => (value.length < 25 ? true : 'Поле должно содержать менее 25 символов'),
  },
}: AuthTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log(`${registerName} error:`)
    // console.log(errors[registerName])

    if (errors[registerName] !== undefined) {
      setError(true);
    } else {
      setError(false);
    }
  }, [isSubmitting]);

  const registerProps = {
    ...register(registerName, {
      required: 'Заполните поле',
      shouldUnregister: true,
      validate,
    }),
  };

  return (
    <Wrapper>
      <Title htmlFor={id || title} active={isFocused}>
        {title}
      </Title>
      {link && <Link to={link.href}>{link.text}</Link>}
      <InputWrapper active={isFocused}>
        {icon
          && (icon.imageLink ? <Img src={icon.imageLink} alt={title} /> : <Span>{icon.text}</Span>)}
        <Input
          onFocus={() => setIsFocused(true)}
          type={type}
          id={id || title}
          {...registerProps}
          onBlur={(e) => {
            registerProps.onBlur(e).then((_) => setIsFocused(false));
          }}
          onChange={(e) => {
            registerProps.onChange(e).then((_) => setError(false));
          }}
          error={error}
        />
      </InputWrapper>
      <ErrorMessage name={registerName} render={({ message }) => <Error>{message}</Error>} />
    </Wrapper>
  );
};
