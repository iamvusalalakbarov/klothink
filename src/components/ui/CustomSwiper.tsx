'use client';

import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

SwiperCore.use([Navigation, Autoplay]);

interface ICustomSwiperProps extends SwiperProps {
  children: Array<React.ReactNode>;
}

const CustomSwiper: React.FC<ICustomSwiperProps> = (props) => {
  return (
    <Swiper {...props}>
      {props.children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
