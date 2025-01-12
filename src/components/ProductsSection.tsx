'use client';

import React, { useRef, useState } from 'react';
import {
  CustomButtonVariant,
  CustomSwiperButtonDirection,
} from '@/types/enums';
import CustomButton from './ui/CustomButton';
import SectionHeading from './ui/SectionHeading';
import clsx from 'clsx';
import Image from 'next/image';
import CustomSwiper from './ui/CustomSwiper';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import CustomSwiperButton from './ui/CustomSwiperButton';

const productCategories = ['All', 'Menswear', 'Womenswear', 'Kidswear'];
const productStyles = ['Casual', 'Formal', 'Party'];
const products = [
  {
    title: 'Classic Denim Jeans',
    price: 49.99,
    image: '/images/products/product-1.png',
  },
  {
    title: 'Cozy Comfort Hoodie',
    price: 39.99,
    image: '/images/products/product-2.png',
  },
  {
    title: 'Classic Polo Shirt',
    price: 29.99,
    image: '/images/products/product-3.png',
  },
  {
    title: 'Chino Pants',
    price: 44.99,
    image: '/images/products/product-4.png',
  },
  {
    title: 'Classic Denim Jeans',
    price: 49.99,
    image: '/images/products/product-1.png',
  },
  {
    title: 'Cozy Comfort Hoodie',
    price: 39.99,
    image: '/images/products/product-2.png',
  },
  {
    title: 'Classic Polo Shirt',
    price: 29.99,
    image: '/images/products/product-3.png',
  },
  {
    title: 'Chino Pants',
    price: 44.99,
    image: '/images/products/product-4.png',
  },
];

const ProductsSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeStyleIndex, setActiveStyleIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperProgressBarInnerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="wrapper space-y-10 py-20 laptop:space-y-[60px] laptop:py-[150px]">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          title="Discover Fashion."
          subtitle="Products"
          description="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."
        />

        <CustomButton
          variant={CustomButtonVariant.PRIMARY}
          className="px-5 desktop:px-[30px]"
        >
          View All Products
        </CustomButton>
      </div>

      <div className="flex flex-col gap-y-5 border-y border-light-95 py-5 lg:flex-row lg:items-center lg:justify-between laptop:py-6">
        <div className="flex items-center gap-x-4 overflow-x-auto border-b border-light-95 pb-5 lg:border-b-0 lg:pb-0">
          {productCategories.map((category, index) => (
            <React.Fragment key={index}>
              <span
                onClick={() => setActiveCategoryIndex(index)}
                className={clsx('cursor-pointer uppercase', {
                  'font-semibold text-grey-10': activeCategoryIndex === index,
                  'font-medium text-grey-60': activeCategoryIndex !== index,
                })}
              >
                {category}
              </span>
              {productCategories.length > index + 1 && (
                <span className="h-[22px] w-px flex-shrink-0 bg-light-95 desktop:h-[27px]"></span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center justify-between gap-x-2">
          {productStyles.map((style, index) => (
            <button
              key={index}
              onClick={() => setActiveStyleIndex(index)}
              className={clsx(
                'w-full rounded-[32px] py-3 text-sm font-semibold transition-colors lg:px-5',
                {
                  'bg-grey-15 text-white': index === activeStyleIndex,
                  'border border-light-95 text-grey-15':
                    index !== activeStyleIndex,
                }
              )}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <div className="relative lg:space-y-[60px]">
        <CustomSwiper
          autoplay
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            prevEl: '.products-swiper-buttons .prev',
            nextEl: '.products-swiper-buttons .next',
            disabledClass: 'disabled',
          }}
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        >
          {products.map((product, index) => (
            <div key={index} className="space-y-4">
              <div className="relative h-[363px] rounded-2xl bg-[#F7F7F8] laptop:h-[318px] desktop:h-[384px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  unoptimized
                  className="object-contain"
                />

                <div className="absolute -bottom-2 -right-2 rounded-full bg-white p-2">
                  <button className="flex size-[52px] items-center justify-center rounded-full bg-primary-50 transition-colors hover:bg-primary-70">
                    <ShoppingCartIcon className="size-5 text-grey-15 desktop:size-6" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5 laptop:space-y-1.5">
                  <div className="font-semibold text-grey-15 laptop:text-xl">
                    {product.title}
                  </div>
                  <span className="font-medium text-grey-30 laptop:text-lg">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CustomSwiper>

        <div className="flex items-center justify-between gap-[100px]">
          <div className="hidden h-[7px] w-full rounded-full bg-light-90 lg:block">
            <div
              ref={swiperProgressBarInnerRef}
              className="h-full rounded-full bg-grey-15"
              style={{
                width: `${100 / products.length}%`,
                transform: `translateX(${swiperProgressBarInnerRef.current ? swiperProgressBarInnerRef.current.offsetWidth * activeSlideIndex : 0}px)`, // Adjust translateX based on current slide
                transition: 'transform 0.5s ease',
              }}
            />
          </div>
          <div className="products-swiper-buttons absolute bottom-[5px] right-0 z-10 flex items-center gap-x-2.5 bg-white pl-2 lg:static">
            <CustomSwiperButton direction={CustomSwiperButtonDirection.PREV} />
            <CustomSwiperButton direction={CustomSwiperButtonDirection.NEXT} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
