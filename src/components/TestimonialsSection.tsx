import Image from 'next/image';
import {
  CustomButtonVariant,
  CustomSwiperButtonDirection,
} from '@/types/enums';
import CustomButton from './ui/CustomButton';
import SectionHeading from './ui/SectionHeading';
import StarShape from './StarShape';
import CustomSwiper from './ui/CustomSwiper';
import CustomSwiperButton from './ui/CustomSwiperButton';

const testimonials = [
  {
    customer: 'Sarah Thompson',
    comment:
      "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    stars: 5,
    avatar: '/images/customers/customer-sarah-thompson.png',
  },
  {
    customer: 'Rajesh Patel',
    comment:
      'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
    stars: 5,
    avatar: '/images/customers/customer-rajesh-patel.png',
  },
  {
    customer: 'Emily Walker',
    comment:
      'Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.',
    stars: 5,
    avatar: '/images/customers/customer-emily-walker.png',
  },
  {
    customer: 'Sarah Thompson',
    comment:
      "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    stars: 4,
    avatar: '/images/customers/customer-sarah-thompson.png',
  },
  {
    customer: 'Rajesh Patel',
    comment:
      'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
    stars: 4,
    avatar: '/images/customers/customer-rajesh-patel.png',
  },
  {
    customer: 'Emily Walker',
    comment:
      'Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.',
    stars: 4,
    avatar: '/images/customers/customer-emily-walker.png',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="wrapper space-y-10 py-20 laptop:space-y-[60px] laptop:py-[150px]">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          title="Customers Love."
          subtitle="Testimonials"
          description="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion."
        />

        <CustomButton
          variant={CustomButtonVariant.PRIMARY}
          className="px-5 desktop:px-[30px]"
        >
          View All Testimonials
        </CustomButton>
      </div>

      <div className="relative space-y-5 rounded-2xl border border-light-97 bg-light-99 p-5 lg:p-6 laptop:space-y-0">
        <CustomSwiper
          autoplay
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: '.testimonials-swiper-buttons .prev',
            nextEl: '.testimonials-swiper-buttons .next',
            disabledClass: 'disabled',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            1920: {
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="space-y-5 rounded-2xl border border-light-95 bg-white p-[30px] laptop:space-y-[30px] laptop:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-x-2.5">
                  <div className="relative size-[50px] rounded-full bg-[#FFEEB2]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.customer}
                      fill
                      unoptimized
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="font-medium text-grey-15">
                      {testimonial.customer}
                    </div>

                    <div className="flex items-center gap-x-[3px] desktop:gap-x-[5px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarShape
                          key={index}
                          filled={testimonial.stars >= index + 1}
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

              <p className="text-sm text-grey-30 laptop:text-base desktop:text-lg">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </CustomSwiper>

        <div className="testimonials-swiper-buttons left-0 flex items-center justify-center gap-x-2.5 laptop:absolute laptop:-left-[14px] laptop:-right-[14px] laptop:top-1/2 laptop:z-10 laptop:-translate-y-1/2 laptop:justify-between">
          <CustomSwiperButton direction={CustomSwiperButtonDirection.PREV} />
          <CustomSwiperButton direction={CustomSwiperButtonDirection.NEXT} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
