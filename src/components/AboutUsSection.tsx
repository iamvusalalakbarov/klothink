'use client';

import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  StarIcon,
  LifebuoyIcon,
  MegaphoneIcon,
  LightBulbIcon,
  SparklesIcon,
  SunIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/20/solid';
import ViewAllButton from './ui/ViewAllButton';

const aboutUsData = [
  {
    title: 'Passionate Craftsmanship',
    description:
      'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.',
    icon: StarIcon,
  },
  {
    title: 'Fashion Forward',
    description:
      "We're trendsetters, curating styles that empower and inspire confidence.",
    icon: LifebuoyIcon,
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'At Klothink, our customers are at the heart of everything we do.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Global Inspiration',
    description:
      'Influenced by global trends, we bring you a diverse and dynamic collection.',
    icon: LightBulbIcon,
  },
  {
    title: 'Empowering Your Style',
    description:
      'Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.',
    icon: SparklesIcon,
  },
  {
    title: 'Sustainable Practices',
    description:
      'Klothink is committed to sustainability, integrating eco-friendly practices into our production process.',
    icon: SunIcon,
  },
];

const AboutUsSection = () => {
  const [viewAll, setViewAll] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width: 640px)');

  const visibleItems =
    isLargeScreen || viewAll ? aboutUsData : aboutUsData.slice(0, 2);

  const toggleViewAll = () => {
    setViewAll((prev) => !prev);
  };

  return (
    <section className="wrapper mb-20 space-y-10 laptop:mb-[150px] laptop:space-y-[60px]">
      <SectionHeading
        title="The Klothink Experience."
        subtitle="About Us"
        description="At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story."
      />

      <div className="grid grid-cols-1 gap-5 rounded-2xl border border-light-97 bg-light-99 p-5 md:grid-cols-2 laptop:grid-cols-3 desktop:gap-[30px] desktop:p-[30px]">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="space-y-4 rounded-2xl border border-light-95 bg-white p-6 laptop:space-y-5 laptop:p-[30px] desktop:space-y-6 desktop:p-10"
          >
            <div className="flex items-center gap-x-2.5 desktop:gap-x-4">
              <div className="flex size-[44px] items-center justify-center rounded-full bg-primary-50 laptop:size-12 desktop:size-14">
                <item.icon className="size-5 text-grey-15 desktop:size-6" />
              </div>

              <h3 className="font-semibold text-grey-15 laptop:text-lg desktop:text-xl">
                {item.title}
              </h3>
            </div>

            <p className="text-sm text-grey-40 desktop:text-base">
              {item.description}
            </p>
          </div>
        ))}

        <ViewAllButton viewAll={viewAll} onClick={toggleViewAll} />
      </div>
    </section>
  );
};

export default AboutUsSection;
