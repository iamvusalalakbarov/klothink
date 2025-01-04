'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import 'swiper/css';

interface ICustomSwiperProps {
  slides: Array<React.ReactNode>;
  navigation?: NavigationOptions;
}

const CustomSwiper: React.FC<ICustomSwiperProps> = (props) => {
  return (
    <Swiper modules={[Navigation]} navigation={props.navigation}>
      {props.slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
