import React from 'react';
import CustomButton from '@/components/ui/CustomButton';
import SectionHeading from '@/components/ui/SectionHeading';
import { CustomButtonVariant } from '@/types/enums';
import {
  PhoneIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';

const heroGridData = [
  {
    title: 'Working Hours',
    description: 'Available 24/7 ',
  },
  {
    title: 'Call Us On',
    description: '+1 (555) 123-4567',
  },
  {
    title: 'Email',
    description: 'support@klothink.com',
  },
];

const officeLocations = [
  {
    city: 'New York City, USA',
    address: '123 Fashion Avenue, Suite 456, New York, NY 10001',
  },
  {
    city: 'Paris, France',
    address: '789 Rue de la Mode, Paris 75001',
  },
  {
    city: 'Tokyo, Japan',
    address: '456 Shibuya Fashion Street, Shibuya-ku, Tokyo',
  },
];

const policies = [
  {
    title: 'Return Policy',
    subtitle: 'Easy Returns at Klothink',
    description:
      'Explore our hassle-free return policy designed to ensure your satisfaction with every purchase.',
    buttonTitle: 'Read Return Policy',
    link: '#',
    data: [
      {
        title: 'Eligibility',
        description:
          'Items must be unused, with tags attached, and returned within 30 days of delivery.',
      },
      {
        title: 'Process',
        description:
          'Initiate returns through our <a href="#">Return Center</a> for a smooth and efficient process.',
      },
      {
        title: 'Refund',
        description:
          'Expect a refund to your original payment method within 7-10 business days.',
      },
    ],
  },
  {
    title: 'Cancellation Policy',
    subtitle: 'Flexible Ordering Experience',
    description:
      'Familiarize yourself with our cancellation policy to make changes to your order with ease.',
    buttonTitle: 'Read Cancellation Policy',
    link: '#',
    data: [
      {
        title: 'Cancellation Window',
        description:
          'Orders can be canceled within 24 hours of placement for a full refund.',
      },
      {
        title: 'Cancellation Process',
        description:
          'Visit our Order Management section to cancel your order effortlessly.',
      },
      {
        title: 'Refund Timeline',
        description:
          'Refunds for canceled orders are processed within 5-7 business days.',
      },
    ],
  },
];

export default function ContactSupport() {
  return (
    <div className="mb-20 mt-10 space-y-20 laptop:mb-[100px] laptop:mt-20 laptop:space-y-[150px] desktop:mb-[150px] desktop:mt-[135px] desktop:space-y-[200px]">
      <section className="wrapper space-y-10 laptop:space-y-20 desktop:space-y-[100px]">
        <div className="flex flex-col gap-[30px] lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Klothink Support."
            subtitle="Your Fashion Ally"
            description="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."
          />

          <div className="grid grid-cols-2 gap-y-5 rounded-[14px] border border-light-95 p-5 lg:flex-shrink-0 lg:grid-cols-3 laptop:px-10 laptop:py-[30px]">
            {heroGridData.map((data, index) => (
              <div
                key={index}
                className="space-y-1.5 border-light-95 odd:pr-4 even:border-l even:pl-4 lg:first:pr-4 laptop:min-w-[182px] laptop:space-y-2.5 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-4"
              >
                <h6 className="font-semibold text-grey-15 laptop:text-lg">
                  {data.title}
                </h6>
                <p className="text-sm font-medium text-grey-40">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 laptop:space-y-5">
          <h6 className="text-sm font-medium text-grey-40 laptop:text-base">
            Office Locations
          </h6>

          <div className="grid grid-cols-1 gap-[30px] rounded-2xl border border-light-95 p-6 lg:grid-cols-2 laptop:grid-cols-3 laptop:gap-10 laptop:p-10">
            {officeLocations.map((officeLocation, index) => (
              <div key={index} className="space-y-5 laptop:space-y-6">
                <div className="space-y-1.5">
                  <div className="font-semibold text-grey-15 laptop:text-lg">
                    {officeLocation.city}
                  </div>
                  <p className="text-sm text-grey-40">
                    {officeLocation.address}
                  </p>
                </div>

                <div className="flex items-center gap-x-2.5">
                  <CustomButton
                    variant={CustomButtonVariant.SECONDARY}
                    className="w-full lg:w-fit lg:px-5"
                  >
                    <PhoneIcon className="size-5" />
                    Call Now
                  </CustomButton>
                  <CustomButton
                    variant={CustomButtonVariant.TERTIARY}
                    className="w-full lg:w-fit lg:px-5"
                  >
                    Get Direction
                    <ArrowRightIcon className="size-5" />
                  </CustomButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper space-y-[60px] laptop:space-y-20 desktop:space-y-[100px]">
        {policies.map((policy, i) => (
          <div key={i} className="space-y-10 laptop:space-y-[60px]">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:justify-between">
              <SectionHeading
                title={policy.title}
                subtitle={policy.subtitle}
                description={policy.description}
              />

              <Link
                href={policy.link}
                className="flex w-fit items-center justify-center gap-x-1 rounded-[32px] border border-light-95 bg-light-97 px-5 py-[14px] text-sm font-semibold text-grey-15"
              >
                {policy.buttonTitle}
                <ArrowLongRightIcon className="size-5" />
              </Link>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-light-95 p-[30px] lg:flex-row laptop:gap-10 laptop:p-10">
              {policy.data.map((item, j) => (
                <React.Fragment key={j}>
                  <div className="space-y-1.5">
                    <div className="font-semibold text-grey-15 laptop:text-lg">
                      {item.title}
                    </div>
                    <p
                      className="text-sm text-grey-40 laptop:text-base [&>a]:font-medium [&>a]:text-grey-15 [&>a]:underline"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(item.description),
                      }}
                    />
                  </div>

                  {policy.data.length !== j + 1 && (
                    <div className="h-px w-full bg-light-95 lg:h-auto lg:w-px"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </section>

      <FAQSection />
    </div>
  );
}
