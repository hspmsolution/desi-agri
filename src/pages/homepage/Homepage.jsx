import React from 'react'
import AgriInfoSlider from '../../components/CardSlider/CardS';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/ImgSlider/Slider';
import SecNav from './SecNav/SecNav';
import LineChart from './AgriGraph/linechart';
import ProductGallery from './ProductGallery/ProductGallery';
import TESlider from './TrainingNEdu/TESlider';
import HNFD from './HNFD/HNFD';
import Gannounce from './Gannounce/Gannounce';
import Member from './NCDEX Member/Member';
import Flex from './NCDEX Impact/Flex';
import Footer from './Footer/Footer';
import { TestimonialSec } from './Testimonial/Testimonial';

function Homepage() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <SecNav/>
    <LineChart />
    <AgriInfoSlider />
    <ProductGallery />
    <TESlider />
    <HNFD />
    <Gannounce />
    <Member />
    <TestimonialSec />
    <Flex />
    <Footer />
    </>
  )
}

export default Homepage;