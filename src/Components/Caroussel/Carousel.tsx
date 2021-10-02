import React from 'react'

import pic1 from './1.png'
import pic2 from './2.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Slider from 'infinite-react-carousel'
import styled from 'styled-components'

const Carousel = styled(Slider)`
  width: 75%;
  flex-shrink: 1;
  flex-grow: 1;
  //background-color: rgba(0, 0, 0, 0.2);

  img {
    height: 200px;
    width: 300px;
  }

  .carousel-dots {
    margin: 0;
  }

  //background-repeat: no-repeat;
  //background-color: black;
  //background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/75/%D0%9A%D0%B0%D1%80%D1%83%D1%81%D0%B5%D0%BB%D1%8C_%282019%29.png');
`

export const FeatureCarousel = () => (
  <Carousel autoplay autoplaySpeed={5000} dots>
    <div>
      <img alt="chkn" src={pic1} />
      <h3>Study Lists</h3>
    </div>
    <div>
      <img
        alt="chkn"
        src="https://elitemedicalprep.com/wp-content/uploads/2020/06/Osmosis-Spaced-Repetition-Graph.png"
      />
      <h3>SRS</h3>
    </div>
    <div>
      <img alt="chkn" src={pic2} />
      <h3>Lessons</h3>
    </div>
  </Carousel>
)
