import React from 'react';
import Slider from 'react-slick';
import logo from '../../assets/logo';
import './dots.css';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  return (
    <Slider className='w-96' {...settings}>
      <section className='flex justify-center items-center'>
        <figure>
          <img src={logo.truck} alt='Escavadora' />
        </figure>
      </section>
      <section className='flex justify-center items-center'>
        <figure>
          <img src={logo.mineAndPhone} alt='Escavadora' />
        </figure>
      </section>
      <section className='flex justify-center items-center'>
        <figure>
          <img src={logo.phoneAndTruck} alt='Escavadora' />
        </figure>
      </section>
    </Slider>
  );
}
