import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface IViewAllButtonProps {
  viewAll: boolean;
  onClick: () => void;
}

const ViewAllButton: React.FC<IViewAllButtonProps> = (props) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-x-1 text-sm font-semibold text-grey-30 md:hidden"
      onClick={props.onClick}
    >
      {props.viewAll ? 'View Less' : 'View All'}
      {props.viewAll ? (
        <ArrowUpIcon className="size-4" />
      ) : (
        <ArrowDownIcon className="size-4" />
      )}
    </button>
  );
};

export default ViewAllButton;
