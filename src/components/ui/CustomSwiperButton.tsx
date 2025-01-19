import React from 'react';
import clsx from 'clsx';
import { CustomSwiperButtonDirection } from '@/types/enums';

interface ICustomSwiperButtonProps {
  direction: CustomSwiperButtonDirection;
  withoutBorder?: boolean;
}

const CustomSwiperButton: React.FC<ICustomSwiperButtonProps> = (props) => {
  return (
    <button
      className={clsx(
        'custom-swiper-button flex size-10 items-center justify-center rounded-full bg-grey-15 text-white transition-colors hover:bg-grey-20 laptop:size-12',
        {
          'prev [&>svg]:rotate-180':
            props.direction === CustomSwiperButtonDirection.PREV,
          next: props.direction === CustomSwiperButtonDirection.NEXT,
          '!border-none': props.withoutBorder,
        }
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>
  );
};

export default CustomSwiperButton;
