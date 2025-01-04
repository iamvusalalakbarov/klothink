'use client';

import React from 'react';
import clsx from 'clsx';

interface ISectionHeadingProps {
  title: string;
  subtitle: string;
  description: string;
  withSmallerPadding?: boolean;
}

const SectionHeading: React.FC<ISectionHeadingProps> = (props) => {
  return (
    <div className="space-y-2.5 laptop:space-y-5 desktop:space-y-6">
      <div className="flex flex-col gap-1 uppercase laptop:flex-row laptop:items-start">
        <span
          className={clsx(
            'text-nowrap text-sm font-semibold text-grey-60 laptop:order-last laptop:py-1 desktop:px-[14px] desktop:py-2 desktop:text-lg',
            {
              'laptop:px-[5px]': props.withSmallerPadding,
              'laptop:px-2.5': !props.withSmallerPadding,
            }
          )}
        >
          {props.subtitle}
        </span>
        <h2 className="text-[28px] font-semibold text-grey-10 laptop:text-[38px] desktop:text-[48px]">
          {props.title}
        </h2>
      </div>
      <p className="text-sm text-grey-40 laptop:text-base desktop:text-lg">
        {props.description}
      </p>
    </div>
  );
};

export default SectionHeading;
