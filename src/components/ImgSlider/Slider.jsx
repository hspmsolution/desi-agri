import React from 'react';
import ImageSlider, { Slide } from 'react-auto-image-slider';
import './Slider.css';

const Slider = () =>
 (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img1" src={'https://ied.eu/wp-content/uploads/2018/05/agriculture-economy.png'} />
      </Slide>
    </ImageSlider>
  )

export default Slider;