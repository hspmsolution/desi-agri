import React from 'react';
import ImageSlider, { Slide } from 'react-auto-image-slider';
import './Slider.css';

const Slider = () => {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      {/* <Slide>
        <img alt="img1" src={'https://ncdex.com/downloads/Media/Saarthi-Mobile-app_20220407-banner.jpg'} />
      </Slide> */}
      <Slide>
        <img alt="img1" src={'https://ncdex.com/downloads/Media/PeopleFirst-HR-Excellence-Awards_20220819.jpg'} />
      </Slide>
      <Slide>
        <img alt="img1" src={'https://ncdex.com/downloads/Media/PeopleFirst-HR-Excellence-Awards_20220819.jpg'} />
      </Slide>
    </ImageSlider>
  )
}

export default Slider;