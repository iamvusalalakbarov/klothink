import React from 'react';
import Link from 'next/link';
import { CustomButtonVariant } from '@/types/enums';
import clsx from 'clsx';

interface ICustomButtonProps {
  variant: CustomButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  const className = clsx(
    `flex items-center justify-center gap-x-1.5 rounded-[32px] py-[14px] desktop:gap-x-2.5 desktop:py-[18px] font-medium text-nowrap self-start lg:self-auto ${props.className}`,
    {
      'bg-primary-50 text-grey-15':
        props.variant === CustomButtonVariant.PRIMARY,
      'border border-light-95 bg-white text-grey-15':
        props.variant === CustomButtonVariant.SECONDARY,
      'bg-grey-15 text-white': props.variant === CustomButtonVariant.TERTIARY,
    }
  );

  if (props.href) {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button onClick={props.onClick} className={className}>
        {props.children}
      </button>
    );
  }
};

export default CustomButton;
