import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterDisplay_ from '../../Components/CharacterDisplay'
import { NavBar } from '../../Components/NavBar/NavBar'
import Input_ from '../../Components/ReviewInput'
import { selectors } from '../../Data/Slices/userdata'

import { getReviews } from './Review.utils'

import styled from 'styled-components'

const CharacterDisplay = styled(CharacterDisplay_)`
  background-color: #606060;
  margin: 15px auto auto;
`;

const Input = styled(Input_)`
  background-color: #606060;
  margin: 15px auto auto;
`;
const Wrapper = styled.div`
  height: 100%;
  background-color: #303030;
  //min-width: 768px;
`;
const ArrowRight = styled.span`
  display: flex;

  align-items: center;
  color: #f18c9c;
  user-select: none;
  cursor: pointer;
  font-size: 50px;
  margin: 50px;
  @media (max-width: 800px) {
    margin: 35px;
  } ;
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ReviewPage() {
  const userToken = useSelector(selectors.accessToken);

  const [reviews, setReviews] = useState([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    userToken
      && getReviews(userToken).then((data) => {
        setReviews(data);
      });
  }, [getReviews]);

  return (
    <Wrapper>
      <NavBar />
      <Flex>
        <ArrowLeft onClick={() => setPosition(position > 0 ? position - 1 : position)}>➤</ArrowLeft>
        <div>
          <CharacterDisplay review={reviews[position]} />
          <Input callback={alert} status={null} maxLength={20} />
        </div>
        <ArrowRight
          onClick={() => setPosition(position < reviews.length - 1 ? position + 1 : position)}
        >
          ➤
        </ArrowRight>
      </Flex>
    </Wrapper>
  );
}
