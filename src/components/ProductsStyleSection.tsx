'use client';

import React, { useState } from 'react';
import { IProductStyle } from '@/app/products/page';
import ProductCard from './ui/ProductCard';
import ProductsSwiper from './ui/ProductsSwiper';
import ViewAllButton from './ui/ViewAllButton';

interface IProductsStyleSectionProps {
  index: number;
  productsStyle: IProductStyle;
}

const ProductsStyleSection: React.FC<IProductsStyleSectionProps> = (props) => {
  const [viewAll, setViewAll] = useState(false);

  const visibleProducts = viewAll
    ? props.productsStyle.products
    : props.productsStyle.products.slice(0, 2);

  const toggleViewAll = () => {
    setViewAll((prev) => !prev);
  };

  return (
    <section className="wrapper space-y-[30px] laptop:space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-[#333] laptop:text-xl">
          {props.productsStyle.title}
        </h3>
        <p className="text-grey-40">{props.productsStyle.description}</p>
      </div>

      <div className="space-y-5 px-5 lg:hidden">
        {visibleProducts.map((product, j) => (
          <ProductCard key={j} product={product} />
        ))}

        <ViewAllButton viewAll={viewAll} onClick={toggleViewAll} />
      </div>

      <div className="hidden lg:block">
        <ProductsSwiper
          index={props.index}
          products={props.productsStyle.products}
        />
      </div>
    </section>
  );
};

export default ProductsStyleSection;
