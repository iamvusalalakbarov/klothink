import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './ui/CustomButton';
import {
  CustomButtonVariant,
  CustomSwiperButtonDirection,
} from '@/types/enums';
import { ShoppingBagIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import CustomSwiper from './ui/CustomSwiper';
import SectionHeading from './ui/SectionHeading';
import React from 'react';
import CustomSwiperButton from './ui/CustomSwiperButton';
import MotionCountUp from './ui/MotionCountUp';

const heroGridData = [
  {
    title: (
      <>
        Over <MotionCountUp count={1000} />+
      </>
    ),
    description: 'Trendsetting Styles',
  },
  {
    title: (
      <>
        <MotionCountUp count={99} />%
      </>
    ),
    description: 'Customer Satisfaction Rate',
  },
  {
    title: '24/7',
    description: 'Shopping Convenience',
  },
  {
    title: '30-Day',
    description: 'Hassle-Free Returns',
  },
];

const sizes = ['S', 'M', 'L', 'XL'];

const colors = ['#739CDA', '#DAA573', '#DAD673'];

const HeroSection = () => {
  return (
    <section className="wrapper mb-20 mt-10 flex flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-between lg:gap-x-[30px] laptop:mb-[150px] laptop:gap-x-[60px] desktop:mb-[200px] desktop:mt-[100px] desktop:gap-x-20">
      <div className="flex flex-col gap-y-10 lg:w-1/2 lg:py-3 laptop:gap-y-[60px] desktop:gap-y-20 desktop:py-0">
        <div className="space-y-6 laptop:space-y-10">
          <div>
            <SectionHeading
              subtitle="Style Redefined."
              title="Elevate Your Style with Klothink"
              description="Explore a world of fashion at Klothink, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions."
              withSmallerPadding
            />
          </div>

          <div className="flex items-center justify-between gap-x-2 lg:justify-start">
            <CustomButton
              variant={CustomButtonVariant.PRIMARY}
              href="#"
              className="w-full lg:w-[148px]"
            >
              <ShoppingBagIcon className="size-5" />
              Shop Now
            </CustomButton>
            <CustomButton
              variant={CustomButtonVariant.SECONDARY}
              href="#"
              className="w-full lg:w-[148px]"
            >
              Contact Us
            </CustomButton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 rounded-xl border-2 border-white bg-light-97 p-2.5 shadow-[0px_0px_0px_4px_#FAFAFA] laptop:gap-4">
          {heroGridData.map((data, index) => (
            <div
              key={index}
              className="space-y-1 rounded-xl border border-light-95 bg-white p-5 laptop:space-y-1.5"
            >
              <h6 className="text-xl font-semibold uppercase text-grey-10 laptop:text-[26px]">
                {data.title}
              </h6>
              <p className="text-sm text-grey-40 laptop:text-base">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative rounded-2xl bg-[#F7F7F8] lg:w-1/2">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-5">
          <span className="rounded-[32px] bg-white px-2.5 py-1.5 text-sm font-medium text-grey-15">
            Best Seller
          </span>

          <div className="best-sellers-swiper-buttons z-10 flex items-center gap-x-2.5">
            <CustomSwiperButton
              direction={CustomSwiperButtonDirection.PREV}
              withoutBorder
            />
            <CustomSwiperButton
              direction={CustomSwiperButtonDirection.NEXT}
              withoutBorder
            />
          </div>
        </div>

        <CustomSwiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: '.best-sellers-swiper-buttons .prev',
            nextEl: '.best-sellers-swiper-buttons .next',
            disabledClass: 'disabled',
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <React.Fragment key={index}>
              <div className="absolute inset-0 flex flex-col justify-between px-4 py-5">
                <div></div>

                {/* Laptop, Desktop */}
                <div className="hidden justify-between gap-x-4 laptop:flex">
                  <div className="flex items-center justify-between gap-x-1.5 rounded-full bg-white py-2 pl-4 pr-2.5">
                    <span className="text-sm font-medium">Color</span>
                    <div className="flex items-center gap-x-0.5 rounded-full border border-light-95 px-[5px] py-1">
                      {colors.map((color, index) => (
                        <span
                          key={index}
                          className="size-4 rounded-full"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-x-1.5 rounded-full bg-white py-2 pl-4 pr-2.5">
                    <span className="text-sm font-medium">Sizes</span>
                    <div className="flex flex-1 items-center">
                      {sizes.map((size, index) => (
                        <span
                          key={index}
                          className="w-full rounded-[32px] border border-light-95 bg-light-97 py-2 text-center text-xs text-grey-15"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="flex items-center justify-center gap-x-1.5 rounded-full bg-white p-2 pl-[14px] text-sm font-medium text-grey-15 transition-colors hover:bg-light-95"
                  >
                    View Similar
                    <ArrowLongRightIcon className="size-4" />
                  </Link>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-y-2.5 laptop:hidden">
                  <div className="flex items-center justify-between gap-x-1.5 rounded-full bg-white py-2 pl-4 pr-2.5">
                    <span className="text-sm font-medium">Sizes</span>
                    <div className="flex flex-1 items-center gap-x-0.5">
                      {sizes.map((size, index) => (
                        <span
                          key={index}
                          className="w-full rounded-[32px] border border-light-95 bg-light-97 py-2 text-center text-xs text-grey-15"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center justify-between gap-x-1.5 rounded-full bg-white py-2 pl-4 pr-2.5">
                      <span className="text-sm font-medium">Color</span>
                      <div className="flex items-center gap-x-0.5 rounded-full border border-light-95 px-[5px] py-1">
                        {colors.map((color, index) => (
                          <span
                            key={index}
                            className="size-4 rounded-full"
                            style={{ backgroundColor: color }}
                          ></span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="flex w-[175px] items-center justify-center gap-x-1.5 rounded-full bg-white p-2 text-sm font-medium text-grey-15"
                    >
                      View Similar
                      <ArrowLongRightIcon className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                {/* Laptop, Desktop */}
                <Image
                  src="/images/hero-best-seller.png"
                  alt="Best Seller"
                  width={544}
                  height={619}
                  unoptimized
                  className="hidden laptop:block"
                />

                {/* Mobile */}
                <Image
                  src="/images/hero-best-seller-mobile.png"
                  alt="Best Seller"
                  width={357}
                  height={438}
                  unoptimized
                  className="laptop:hidden"
                />
              </div>
            </React.Fragment>
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
};

export default HeroSection;
