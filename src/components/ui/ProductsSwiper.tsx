import React, { useRef, useState } from 'react';
import { CustomSwiperButtonDirection } from '@/types/enums';
import CustomSwiperButton from './CustomSwiperButton';
import CustomSwiper from './CustomSwiper';
import ProductCard from './ProductCard';
import { IProduct } from '@/types/interfaces';
import SwiperProgressBar from './SwiperProgressBar';

interface IProductsSwiperProps {
  index: number;
  products: Array<IProduct>;
}

const slidesPerViewOnLargerScreens = 4;

const ProductsSwiper: React.FC<IProductsSwiperProps> = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperProgressBarInnerRef = useRef<HTMLDivElement | null>(null);
  const totalSwiperSteps =
    props.products.length - slidesPerViewOnLargerScreens + 1;

  return (
    <div className="space-y-10">
      <CustomSwiper
        autoplay
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: slidesPerViewOnLargerScreens,
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
        <SwiperProgressBar
          ref={swiperProgressBarInnerRef}
          totalSwiperSteps={totalSwiperSteps}
          activeSlideIndex={activeSlideIndex}
        />
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
