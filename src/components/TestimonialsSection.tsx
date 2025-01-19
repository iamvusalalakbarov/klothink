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
import { IReview } from '@/types/interfaces';
import Reviews from './ui/Reviews';

const testimonials: Array<IReview> = [
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
    <section className="wrapper mb-20 space-y-10 laptop:mb-[150px] laptop:space-y-[60px]">
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

      <Reviews reviews={testimonials} />
    </section>
  );
};

export default TestimonialsSection;
