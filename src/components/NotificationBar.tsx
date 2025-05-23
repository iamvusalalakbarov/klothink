import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const NotificationBar = () => {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-center bg-grey-10 pb-[14px] pt-10 laptop:py-[14px] desktop:py-5">
      <Link
        href="#"
        className="group flex w-fit items-center justify-center gap-x-2.5 text-sm font-medium text-white desktop:text-lg"
      >
        <span>Subscribe to our Newsletter For Latest Collections</span>
        <ArrowUpRightIcon className="size-5 transition-transform group-hover:rotate-45 desktop:size-6" />
      </Link>
    </div>
  );
};

export default NotificationBar;
