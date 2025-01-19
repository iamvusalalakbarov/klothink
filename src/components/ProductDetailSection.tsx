'use client';

import Image from 'next/image';
import CustomSwiper from '@/components/ui/CustomSwiper';
import { useState } from 'react';
import Swiper from 'swiper';
import clsx from 'clsx';
import CustomButton from './ui/CustomButton';
import { CustomButtonVariant } from '@/types/enums';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const productImages = [
  '/images/product-detail/1.png',
  '/images/product-detail/2.png',
  '/images/product-detail/3.png',
  '/images/product-detail/4.png',
];

const colors = ['#262626', '#DAA573', '#DAD673'];

const sizes = ['S', 'M', 'L', 'XL'];

const features = [
  'Distressed detailing for a rugged look',
  'Button-up front closure with engraved metal buttons',
  'Two side pockets for added functionality',
  'Adjustable buttoned cuffs for a personalized fit',
  'Back waist tabs for customizable styling',
];

const ProductDetailSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);

  return (
    <section className="wrapper flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      <div className="relative h-[347px] rounded-2xl bg-[#F7F7F8] p-2.5 lg:h-[560px] lg:w-[560px] laptop:p-5">
        <CustomSwiper
          slidesPerView={1}
          spaceBetween={20}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        >
          {productImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={image}
              fill
              unoptimized
              className="object-contain"
            />
          ))}
        </CustomSwiper>

        <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 rounded-lg border border-light-95 bg-white p-2.5 lg:left-5 lg:right-auto lg:top-1/2 lg:-translate-y-1/2">
          <CustomSwiper
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={12}
            breakpoints={{
              1024: {
                direction: 'vertical',
              },
            }}
          >
            {productImages.map((image, index) => (
              <div
                key={index}
                className={clsx(
                  'h-[52px] cursor-pointer rounded transition-colors lg:w-[70px]',
                  {
                    'bg-[#F7F7F8] hover:bg-[#E4E4E7]':
                      activeSlideIndex !== index,
                    'bg-[#E4E4E7]': activeSlideIndex === index,
                  }
                )}
              >
                <Image
                  src={image}
                  alt={image}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            ))}
          </CustomSwiper>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div className="flex flex-col gap-x-4 gap-y-6 laptop:flex-row laptop:items-start laptop:justify-between">
          <div className="flex items-end justify-between gap-x-1.5 gap-y-2.5 lg:flex-col lg:items-start lg:justify-start">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="text-sm text-grey-40 laptop:text-base">
                  Men's Casual Outerwear
                </div>
                <span className="rounded-[30px] bg-primary-70 px-2 py-0.5 text-xs font-medium text-grey-15 laptop:px-2.5 laptop:text-sm">
                  12 Left!
                </span>
              </div>
              <h1 className="text-lg font-semibold text-grey-15 laptop:text-xl">
                Urban Explorer Denim Jacket
              </h1>
            </div>

            <span className="text-[22px] font-bold text-grey-15">$69.99</span>
          </div>

          <div className="flex items-center gap-2.5">
            <CustomButton
              variant={CustomButtonVariant.TERTIARY}
              className="w-full !font-medium lg:w-[145px]"
            >
              <ShoppingBagIcon className="size-6" />
              Buy Now
            </CustomButton>
            <CustomButton
              variant={CustomButtonVariant.SECONDARY}
              className="w-full !font-medium lg:w-[145px]"
            >
              <ShoppingCartIcon className="size-6" />
              Add To cart
            </CustomButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 rounded-[14px] border border-light-95 p-5 laptop:gap-4 laptop:p-6">
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-grey-15 lg:text-base">
              Material
            </h4>
            <p className="text-sm text-grey-40 lg:text-base">
              High-Quality Denim (100% Cotton)
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-medium text-grey-15 lg:text-base">
              Fit
            </h4>
            <p className="text-sm text-grey-40 lg:text-base">Classic Fit</p>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-medium text-grey-15 lg:text-base">
              Color
            </h4>
            <div className="flex w-fit items-center gap-x-1 rounded-full border border-light-95 px-[9px] py-1.5">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setActiveColorIndex(index)}
                  style={{ background: color }}
                  className="relative size-5 rounded-full transition-colors"
                >
                  {activeColorIndex === index && (
                    <Image
                      src="/icons/check.svg"
                      alt="check icon"
                      fill
                      unoptimized
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-medium text-grey-15 lg:text-base">
              Sizes
            </h4>
            <div className="flex items-center gap-x-1.5">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSizeIndex(index)}
                  className={clsx(
                    'flex size-[34px] items-center justify-center rounded border px-0.5 py-3 text-sm transition-colors',
                    {
                      'border-light-95 bg-light-97 text-grey-15 hover:bg-grey-15 hover:text-white':
                        activeSizeIndex !== index,
                      'border-transparent bg-grey-15 text-white':
                        activeSizeIndex === index,
                    }
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[14px] border border-light-95 p-5 laptop:p-6">
          <h3 className="font-medium text-grey-15 laptop:text-lg">
            Shipping Information
          </h3>

          <ul className="ml-5 list-disc space-y-2 laptop:space-y-2.5">
            <li className="text-sm text-grey-40 laptop:text-base">
              Standard shipping:{' '}
              <span className="text-grey-15">3-5 business days</span>
            </li>
            <li className="text-sm text-grey-40 laptop:text-base">
              Express shipping options available at checkout
            </li>
          </ul>
        </div>

        <div className="space-y-4 rounded-[14px] border border-light-95 p-5 laptop:p-6">
          <h3 className="font-medium text-grey-15 laptop:text-lg">Features</h3>

          <ul className="ml-5 list-disc space-y-2 laptop:space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-grey-40 laptop:text-base">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
