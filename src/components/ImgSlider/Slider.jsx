import React from 'react';
import ImageSlider, { Slide } from 'react-auto-image-slider';
import './Slider.css';
import commodity from './commodity.png'

const Slider = () => {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      {/* <Slide>
        <img alt="img1" src={'https://ncdex.com/downloads/Media/Saarthi-Mobile-app_20220407-banner.jpg'} />
      </Slide> */}
      <Slide>
        <img alt="img1" src={'https://ied.eu/wp-content/uploads/2018/05/agriculture-economy.png'} />
      </Slide>
      {/* <Slide>
        <img alt="img1" src={'https://inc42.com/wp-content/uploads/2020/12/feature-2020-12-11T170851.496-1024x768.jpg'} />
      </Slide> */}
    </ImageSlider>
  )
}

export default Slider;