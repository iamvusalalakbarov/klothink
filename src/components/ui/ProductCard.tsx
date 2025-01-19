import React from 'react';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { IProduct } from '@/types/interfaces';
import Link from 'next/link';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  return (
    <div className="overflow-hidden rounded-[14px] border border-light-95">
      <div className="relative h-[258px] bg-[#F7F7F8] desktop:h-[317px]">
        <Image
          src={props.product.image}
          alt={props.product.title}
          fill
          unoptimized
          className="object-contain"
        />

        <Link
          href="/products/8"
          className="absolute bottom-0 right-[26px] z-50 translate-y-1/2 rounded-full bg-white p-4"
        >
          <ShoppingCartIcon className="size-6 text-grey-15 desktop:size-7" />
        </Link>
      </div>

      <div className="space-y-1.5 bg-white p-5 laptop:px-6 laptop:py-[30px] desktop:px-[30px] desktop:py-10">
        <div className="font-semibold text-grey-15">{props.product.title}</div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-grey-60">
            {props.product.detail}
          </span>
          <span className="font-semibold text-grey-15">
            ${props.product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
