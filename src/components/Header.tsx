'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/solid';
import { useRef } from 'react';

const navLinks = [
  { title: 'Home', slug: '' },
  { title: 'Products', slug: 'products' },
];

const mobileNavLinks = [
  { title: 'Home', slug: '' },
  { title: 'Products', slug: 'products' },
  { title: 'Contact', slug: 'contact-support' },
];

const Header = () => {
  const burgerMenuCheckboxRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const slug = pathname.split('/')[1];

  return (
    <>
      {/* Laptop, Desktop View */}
      <header className="sticky top-0 z-40 hidden border-b border-light-95 bg-white lg:block">
        <div className="wrapper relative flex items-center justify-between bg-white py-[18px]">
          <div className="flex items-center gap-x-2.5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`/${link.slug}`}
                className={clsx(
                  'rounded-full border px-5 py-3 text-sm font-medium transition-colors desktop:px-6 desktop:py-[14px] desktop:text-lg',
                  {
                    'border-transparent bg-light-97 text-grey-15':
                      slug === link.slug,
                    'border-light-95 bg-white text-grey-40 hover:bg-light-97':
                      slug !== link.slug,
                  }
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 desktop:size-[60px]"
          >
            <Image
              src="/images/logo.svg"
              alt="Klothink Logo"
              fill
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-x-2.5 desktop:gap-x-[14px]">
            <Link
              href="#"
              className="rounded-full bg-primary-50 p-3 transition-colors hover:bg-primary-70"
            >
              <ShoppingCartIcon className="size-5 text-grey-15 desktop:size-6" />
            </Link>
            <Link
              href="/contact-support"
              className={clsx(
                'rounded-full border px-5 py-3 text-sm font-medium transition-colors desktop:px-6 desktop:py-[14px] desktop:text-lg',
                {
                  'border-transparent bg-light-97 text-grey-15':
                    slug === 'contact-support',
                  'border-light-95 bg-white text-grey-40 hover:bg-light-97':
                    slug !== 'contact-support',
                }
              )}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </header>

      <input
        type="checkbox"
        className="hidden"
        id="burger-menu"
        ref={burgerMenuCheckboxRef}
      />

      {/* Mobile View */}
      <header className="sticky top-[75px] z-40 border-b border-light-95 bg-white lg:hidden">
        <div className="wrapper flex items-center justify-between py-5">
          <Link href="/" className="relative size-9">
            <Image
              src="/images/logo.svg"
              alt="Klothink Logo"
              fill
              unoptimized
            />
          </Link>

          <div className="flex items-center justify-center gap-x-2.5">
            <Link href="#" className="rounded-full bg-primary-50 p-3">
              <ShoppingCartIcon className="size-5 text-grey-15 desktop:size-6" />
            </Link>

            {/* <button>
              <Bars3BottomRightIcon className="size-8 text-grey-15" />
            </button> */}

            <label htmlFor="burger-menu" className="burger-menu">
              <span></span>
            </label>
          </div>
        </div>

        <nav className="mobile-nav">
          {mobileNavLinks.map((link, index) => (
            <Link
              key={index}
              href={`/${link.slug}`}
              className="text-2xl font-medium text-grey-15"
              onClick={() => {
                if (burgerMenuCheckboxRef.current) {
                  burgerMenuCheckboxRef.current.checked = false;
                }
              }}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
