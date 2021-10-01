import React from 'react';

import styled from 'styled-components';

type Props = {
  size: 'big' | 'small'
};

const Text = styled.span<Props>`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.size === 'big' ? 108 : 55)}px;
  white-space: nowrap;

  line-height: ${(props) => (props.size === 'big' ? 108 : 55)}px;
  user-select: none;
  color: #f18c9c;
  text-shadow: 1px 1px 2px red, 0 0 1em #f18c9c, 0 0 0.2em #f18c9c;

  ${(props) => props.size === 'big'
    && `@media (max-width: 1200px) {
      font-size: 80px;
      line-height: 85px;
    }
    @media (max-width: 992px) {
      font-size: 60px;
      line-height: 65px;
    }
    @media (max-width: 768px) {
      font-size: 40px;
      line-height: 45px;
    }
    
    @media (max-height: 800px) {
      font-size: 60px;
      line-height: 65px;
    }
    `}
`;

export const Logo = ({ size }: Props) => <Text size={size}>カラクリ</Text>;
