import React from 'react';
import Image from 'next/image';
import { CustomSwiperButtonDirection } from '@/types/enums';
import StarShape from '../StarShape';
import CustomSwiper from './CustomSwiper';
import CustomSwiperButton from './CustomSwiperButton';
import { IReview } from '@/types/interfaces';

interface IReviewsProps {
  reviews: Array<IReview>;
}

const Reviews: React.FC<IReviewsProps> = (props) => {
  return (
    <div className="relative space-y-5 rounded-2xl border border-light-97 bg-light-99 p-5 lg:p-6 laptop:space-y-0">
      <CustomSwiper
        autoplay
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: '.reviews-swiper-buttons .prev',
          nextEl: '.reviews-swiper-buttons .next',
          disabledClass: 'disabled',
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {props.reviews.map((review, index) => (
          <div
            key={index}
            className="space-y-5 rounded-2xl border border-light-95 bg-white p-[30px] laptop:space-y-[30px] laptop:p-10"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-x-2.5">
                <div className="relative size-[50px] rounded-full bg-[#FFEEB2]">
                  <Image
                    src={review.avatar}
                    alt={review.customer}
                    fill
                    unoptimized
                  />
                </div>

                <div className="space-y-1">
                  <div className="font-medium text-grey-15">
                    {review.customer}
                  </div>

                  <div className="flex items-center gap-x-[3px] desktop:gap-x-[5px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarShape
                        key={index}
                        filled={review.stars >= index + 1}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative size-10 desktop:size-[60px]">
                <Image
                  src="/images/quotes-icon.svg"
                  alt="Quotes Icon"
                  fill
                  unoptimized
                />
              </div>
            </div>

            <p className="line-clamp-3 text-sm text-grey-30 laptop:text-base desktop:text-lg">
              {review.comment}
            </p>
          </div>
        ))}
      </CustomSwiper>

      <div className="reviews-swiper-buttons left-0 flex items-center justify-center gap-x-2.5 laptop:absolute laptop:-left-[14px] laptop:-right-[14px] laptop:top-1/2 laptop:z-10 laptop:-translate-y-1/2 laptop:justify-between">
        <CustomSwiperButton direction={CustomSwiperButtonDirection.PREV} />
        <CustomSwiperButton direction={CustomSwiperButtonDirection.NEXT} />
      </div>
    </div>
  );
};

export default Reviews;
