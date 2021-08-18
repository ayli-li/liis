import React from 'react';
import { useSelector } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import './FlightsCarousel.css';

const carouselSettings = {
  className: 'center',
  infinite: false,
  slidesToShow: 3.5,
  speed: 500,
  arrows: false,
};

export const FlightsCarousel = () => {

  const carouselImages = useSelector(state => state.flights.images);

  const slider = React.useRef(null); 

  return (
    <div className='flights__pics'>
      <Slider ref={slider} {...carouselSettings}>
        {carouselImages.map(item => <img src={item.default} alt='img' /> )}            
      </Slider>
      <button className='flights__pics_prev-arrow' onClick={() => slider?.current?.slickPrev()}></button>
      <button className='flights__pics_next-arrow' onClick={() => slider?.current?.slickNext()}></button>
    </div>
)}