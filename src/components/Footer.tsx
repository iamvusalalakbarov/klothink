'use client';

import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './ui/CustomButton';
import { CustomButtonVariant } from '@/types/enums';
import SocialNetworks from './SocialNetworks';

const menu = [
  {
    title: 'Home',
    link: '#',
    sub: [
      {
        title: 'Features',
        link: '#',
      },
      {
        title: 'Popular Products',
        link: '#',
      },
      {
        title: 'Testimonials',
        link: '#',
      },
      {
        title: 'FAQ',
        link: '#',
      },
    ],
  },
  {
    title: 'Menswear',
    link: '#',
    sub: [
      {
        title: 'Casual',
        link: '#',
      },
      {
        title: 'Formal',
        link: '#',
      },
      {
        title: 'Party',
        link: '#',
      },
      {
        title: 'Business',
        link: '#',
      },
    ],
  },
  {
    title: 'Womenswear',
    link: '#',
    sub: [
      {
        title: 'Casual',
        link: '#',
      },
      {
        title: 'Formal',
        link: '#',
      },
      {
        title: 'Party',
        link: '#',
      },
      {
        title: 'Business',
        link: '#',
      },
    ],
  },
  {
    title: 'Kidswear',
    link: '#',
    sub: [
      {
        title: 'Casual',
        link: '#',
      },
      {
        title: 'Formal',
        link: '#',
      },
      {
        title: 'Party',
        link: '#',
      },
    ],
  },
];

const mobileMenu = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Products',
    link: '#',
  },
  {
    title: 'Contact',
    link: '#',
  },
];

const copyrightLinks = [
  {
    title: 'Privacy Policy',
    link: '#',
  },
  {
    title: 'Terms & Conditions',
    link: '#',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="border-y border-light-95 pt-[30px] lg:pt-0">
        <div className="wrapper lg:flex">
          <div className="space-y-[30px] lg:p-20 lg:pl-0">
            <div className="space-y-6 lg:min-w-[355px] laptop:space-y-[30px] desktop:space-y-[60px]">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="relative size-10 laptop:size-12 desktop:size-20"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Klothink Logo"
                    fill
                    unoptimized
                  />
                </Link>

                <div className="lg:hidden">
                  <SocialNetworks />
                </div>
              </div>

              <form
                method="post"
                className="flex items-center gap-x-2 desktop:gap-x-2.5"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full rounded-[32px] border border-light-95 bg-light-99 px-4 py-[14px] text-sm font-medium text-grey-15 outline-none placeholder:text-grey-60"
                />

                <CustomButton
                  variant={CustomButtonVariant.PRIMARY}
                  className="px-6"
                >
                  Subscribe
                </CustomButton>
              </form>
            </div>

            <ul className="flex items-center justify-center gap-x-6 border-t border-light-95 px-[60px] py-6 lg:hidden">
              {mobileMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-grey-15"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden flex-1 items-start justify-between self-end border-l border-light-95 p-[60px] pr-0 lg:flex">
            {menu.map((item, index) => (
              <div key={index} className="space-y-6">
                <Link
                  href={item.link}
                  className="text-lg font-medium text-grey-15"
                >
                  {item.title}
                </Link>

                <ul className="space-y-[14px]">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.link} className="text-grey-40">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper flex flex-col items-center justify-center gap-y-[14px] py-5 text-center lg:flex-row lg:justify-between">
        <ul className="flex flex-col gap-y-1.5 lg:flex-row lg:items-center lg:divide-x lg:divide-light-95">
          {copyrightLinks.map((item, index) => (
            <li
              key={index}
              className="first:pl-0 last:pr-0 lg:px-5 desktop:px-6"
            >
              <Link
                href={item.link}
                className="text-sm text-grey-60 desktop:text-lg"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <SocialNetworks />
        </div>

        <p className="text-sm text-grey-40 desktop:text-lg">
          &copy; 2024 Klothink. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
