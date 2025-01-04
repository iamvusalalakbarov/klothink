'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ShoppingCartIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/solid';

const navLinks = [
  { title: 'Home', slug: '' },
  { title: 'Products', slug: 'products' },
];

const Header = () => {
  const pathname = usePathname();
  const slug = pathname.split('/')[1];

  return (
    <>
      {/* Laptop, Desktop View */}
      <header className="hidden border-b border-light-95 bg-white laptop:block">
        <div className="wrapper relative flex items-center justify-between bg-white py-[18px]">
          <div className="flex items-center gap-x-2.5">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`/${link.slug}`}
                className={clsx(
                  'rounded-full px-5 py-3 text-sm font-medium desktop:px-6 desktop:py-[14px] desktop:text-lg',
                  {
                    'bg-light-97 text-grey-15': slug === link.slug,
                    'border border-light-95 bg-white text-grey-40':
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
            <Link href="#" className="rounded-full bg-primary-50 p-3">
              <ShoppingCartIcon className="size-5 text-grey-15 desktop:size-6" />
            </Link>
            <Link
              href="contact-support"
              className={clsx(
                'rounded-full px-5 py-3 text-sm font-medium desktop:px-6 desktop:py-[14px] desktop:text-lg',
                {
                  'bg-light-97 text-grey-15': slug === 'contact-support',
                  'border border-light-95 bg-white text-grey-40':
                    slug !== 'contact-support',
                }
              )}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile View */}
      <header className="border-b border-light-95 bg-white laptop:hidden">
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

            <button>
              <Bars3BottomRightIcon className="size-8 text-grey-15" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
