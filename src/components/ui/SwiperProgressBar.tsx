import React from 'react';

interface ISwiperProgressBarProps {
  ref: React.RefObject<HTMLDivElement | null>;
  totalSwiperSteps: number;
  activeSlideIndex: number;
}

const SwiperProgressBar: React.FC<ISwiperProgressBarProps> = (props) => {
  return (
    <div className="hidden h-[5px] w-full rounded-full bg-light-90 lg:block desktop:h-[7px]">
      <div
        ref={props.ref}
        className="h-full rounded-full bg-grey-15"
        style={{
          width: `${100 / props.totalSwiperSteps}%`,
          transform: `translateX(${props.ref.current ? props.ref.current.offsetWidth * props.activeSlideIndex : 0}px)`,
          transition: 'transform 0.5s ease',
        }}
      />
    </div>
  );
};

export default SwiperProgressBar;
