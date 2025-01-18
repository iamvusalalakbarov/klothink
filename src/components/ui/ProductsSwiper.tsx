import React, { useRef, useState } from 'react';
import { CustomSwiperButtonDirection } from '@/types/enums';
import CustomSwiperButton from './CustomSwiperButton';
import CustomSwiper from './CustomSwiper';
import ProductCard from './ProductCard';
import { IProduct } from '@/types/interfaces';

interface IProductsSwiperProps {
  index: number;
  products: Array<IProduct>;
}

const ProductsSwiper: React.FC<IProductsSwiperProps> = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperProgressBarInnerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="space-y-10">
      <CustomSwiper
        // autoplay
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: `.products-swiper-buttons-${props.index} .prev`,
          nextEl: `.products-swiper-buttons-${props.index} .next`,
          disabledClass: 'disabled',
        }}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      >
        {props.products.map((product, j) => (
          <ProductCard key={j} product={product} />
        ))}
      </CustomSwiper>

      <div className="flex items-center justify-between gap-[100px]">
        <div className="hidden h-[5px] w-full rounded-full bg-light-90 lg:block">
          <div
            ref={swiperProgressBarInnerRef}
            className="h-full rounded-full bg-grey-15"
            style={{
              width: `${100 / props.products.length}%`,
              transform: `translateX(${swiperProgressBarInnerRef.current ? swiperProgressBarInnerRef.current.offsetWidth * activeSlideIndex : 0}px)`, // Adjust translateX based on current slide
              transition: 'transform 0.5s ease',
            }}
          />
        </div>
        <div
          className={`products-swiper-buttons-${props.index} flex items-center gap-x-4 bg-white pl-2`}
        >
          <CustomSwiperButton direction={CustomSwiperButtonDirection.PREV} />
          <CustomSwiperButton direction={CustomSwiperButtonDirection.NEXT} />
        </div>
      </div>
    </div>
  );
};

export default ProductsSwiper;
