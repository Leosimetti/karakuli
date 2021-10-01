import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '../../Data/Slices/userdata'

import styled from 'styled-components'

const Name = styled.div`
  font-size: 40px;
  line-height: normal;
  //white-space: nowrap;
  //display: flex;
  padding-right: 20px;
  //@media (max-width: 800px) {
  //  font-size: 24px;
  //} ;
`;

export const UserMenu = () => {
  const username = useSelector(selectors.username);

  return (
    <Name>
      {username || 'Aboba Bebrin'}
      {/* <button style={{ height: '100%' }}>▼</button> */}
    </Name>
  );
};
