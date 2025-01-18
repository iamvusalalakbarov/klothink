'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import clsx from 'clsx';
import { useState } from 'react';
import ProductsStyleSection from '@/components/ProductsStyleSection';
import { IProductsStyle } from '@/types/interfaces';

const heroGridData = [
  {
    title: 'Exclusive Offers',
    description: '30% off on select items',
  },
  {
    title: 'New Arrivals',
    description: '50+ new arrivals Daily',
  },
  {
    title: 'Over 1,500 +',
    description: 'curated fashion products.',
  },
];

const clothingTypes = [
  {
    title: 'All',
  },
  {
    title: 'Men’s wear',
    icon: (
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7249 9.90666V10.3302C16.7249 12.706 16.7249 15.0811 16.7249 17.4569C16.7249 18.1453 16.5373 18.3333 15.8484 18.3333C12.8421 18.3333 9.83655 18.3333 6.83028 18.3333C6.14346 18.3333 5.95645 18.1446 5.95578 17.4549C5.95578 15.0791 5.95578 12.7039 5.95578 10.3282V9.90666C5.7506 10.0191 5.58579 10.1047 5.42502 10.1984C4.97028 10.4633 4.73686 10.4191 4.4402 9.97891C3.87917 9.14595 3.32823 8.30629 2.77259 7.46931C2.61854 7.23715 2.4571 7.00834 2.31112 6.7715C2.05146 6.34933 2.14631 5.94924 2.56607 5.68162C4.15027 4.67135 5.7432 3.6738 7.31529 2.64547C7.72563 2.37719 8.14607 2.2882 8.60283 2.34775C8.80598 1.75096 8.92505 1.66666 9.53989 1.66666C10.74 1.66666 11.9401 1.66666 13.1401 1.66666C13.7577 1.66666 13.8741 1.74895 14.0779 2.35176C14.7573 2.18115 15.2571 2.58125 15.7838 2.91845C17.2153 3.83638 18.6509 4.74696 20.0837 5.66221C20.5505 5.96061 20.6198 6.30316 20.3178 6.75544C19.6 7.83261 18.8829 8.91111 18.1685 9.99029C17.8921 10.4078 17.6499 10.4653 17.216 10.2051C17.0734 10.1194 16.9321 10.0318 16.7256 9.90532L16.7249 9.90666Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Women’s wear',
    icon: (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8934 4.08871C11.3687 3.81999 11.878 3.53884 12.3782 3.24266C12.4534 3.1982 12.511 3.08966 12.5351 2.99944C12.6953 2.40315 12.83 1.79901 13.002 1.20664C13.0955 0.886265 13.3302 0.76596 13.5636 0.873842C13.8415 1.00265 13.8395 1.22822 13.7585 1.48256C13.6467 1.83366 13.5427 2.18804 13.4394 2.54176C13.2753 3.10666 13.3119 3.64803 13.5584 4.19398C13.8683 4.87985 13.7447 5.57813 13.4204 6.213C12.9222 7.1872 12.9902 8.12741 13.4015 9.10096C14.1939 10.9801 15.3008 12.6702 16.4843 14.3159C17.0112 15.0495 17.5853 15.7491 18.1143 16.4814C18.2117 16.6161 18.2751 16.8776 18.2078 16.9992C18.1411 17.1202 17.8815 17.2078 17.7193 17.1901C15.956 17.0031 14.2972 17.3752 12.7921 18.2578C10.8836 19.3772 8.92928 19.37 6.90699 18.7377C5.81183 18.3951 4.78924 17.8878 3.83139 17.2548C3.4319 16.9907 3.40313 16.8083 3.69931 16.4336C5.18677 14.5532 6.60558 12.6238 7.71905 10.493C8.06492 9.83128 8.32907 9.1258 8.60302 8.42948C8.85605 7.78611 8.75209 7.14797 8.49579 6.52422C8.38464 6.25288 8.26565 5.98351 8.17607 5.70498C8.03027 5.2486 7.96815 4.75889 8.1813 4.32932C8.59256 3.50027 8.43564 2.70194 8.17607 1.89054C8.12311 1.72513 8.05969 1.56298 8.00412 1.39887C7.92108 1.15433 7.98712 0.954917 8.23099 0.865996C8.4716 0.777729 8.67821 0.873842 8.74948 1.12099C8.92667 1.73493 9.07443 2.35738 9.2477 2.97328C9.27777 3.0792 9.35296 3.20212 9.44384 3.25704C9.92375 3.54734 10.4161 3.81803 10.8927 4.08937L10.8934 4.08871Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Kid’s wear',
    icon: (
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.16344 7.19149C5.91775 7.32918 5.72942 7.44258 5.53355 7.54267C5.26642 7.6792 5.01666 7.64275 4.83413 7.40787C4.08834 6.44923 3.34835 5.48596 2.61706 4.51633C2.42641 4.2635 2.47277 3.96961 2.726 3.77174C3.64563 3.05378 4.56351 2.33292 5.5011 1.63925C6.07305 1.21749 6.73828 0.986078 7.45567 0.833344C7.45162 3.2094 8.82034 4.45616 10.9522 5.10991C10.6816 5.69828 10.4104 6.29128 10.1375 6.88313C9.8715 7.45993 9.61132 8.03905 9.33665 8.61123C9.04807 9.21233 9.04807 9.7955 9.48152 10.3168C9.89468 10.8137 10.4423 11.0787 11.0983 10.9416C11.7919 10.7964 12.1894 10.3306 12.3209 9.64276C12.5904 9.63061 12.868 9.66243 13.1206 9.59822C14.1283 9.34192 14.5815 8.26005 14.064 7.35522C13.6769 6.67833 13.2614 6.01763 12.8587 5.34942C12.8094 5.26727 12.7596 5.1857 12.7022 5.09081C14.7704 4.41739 16.113 3.17354 16.1014 0.833922C16.8397 0.980293 17.524 1.23543 18.1174 1.6757C19.0313 2.35375 19.9248 3.05841 20.8207 3.76017C21.0965 3.97655 21.1336 4.27102 20.9221 4.54988C20.2059 5.49464 19.4838 6.43534 18.7572 7.372C18.5451 7.64564 18.293 7.68788 17.9905 7.52473C17.8063 7.4258 17.6266 7.31819 17.3983 7.18744C17.4151 9.37606 17.2841 11.5219 17.7159 13.6167C14.2604 13.9043 13.0262 16.0362 12.9392 19.1667H10.5721C10.6526 17.7429 10.3588 16.4319 9.45023 15.3153C8.53697 14.1936 7.36354 13.6046 5.82851 13.6902C6.27181 11.5323 6.14258 9.38531 6.1646 7.18976L6.16344 7.19149Z"
          fill="currentColor"
        />
        <path
          d="M14.9878 0.833344C15.0698 2.09195 14.5278 2.97182 13.5419 3.58199C12.3182 4.33947 11.0778 4.30061 9.88702 3.49731C8.97099 2.8796 8.48383 2.02003 8.57041 0.836244C10.7095 1.34839 12.8296 1.36405 14.9878 0.833344Z"
          fill="currentColor"
        />
        <path
          d="M9.5036 19.1667C7.35304 19.0144 5.94046 17.0244 5.86719 14.8522C6.48886 14.7732 7.07215 14.8747 7.62113 15.1834C9.0308 15.9755 9.68737 17.6654 9.5036 19.1667Z"
          fill="currentColor"
        />
        <path
          d="M17.6905 14.8621C17.6682 16.7699 16.4176 18.9935 14.14 19.1667C13.7942 16.771 15.6712 14.5145 17.6905 14.8621Z"
          fill="currentColor"
        />
        <path
          d="M11.2543 7.29303C11.2543 7.99677 11.2555 8.70107 11.2537 9.4048C11.2531 9.60789 11.1728 9.77477 10.9631 9.85397C10.7158 9.94674 10.5161 9.83474 10.3468 9.68426C10.197 9.55132 10.1679 9.38104 10.2582 9.19549C10.5702 8.55398 10.8787 7.91078 11.1883 7.26871C11.2103 7.27663 11.2323 7.28511 11.2543 7.29303Z"
          fill="currentColor"
        />
        <path
          d="M12.3685 6.67007C12.6155 7.08621 12.8835 7.49141 13.097 7.92424C13.1594 8.05144 13.1129 8.2857 13.0311 8.41635C12.9732 8.50844 12.7665 8.55334 12.636 8.5378C12.4259 8.51305 12.3129 8.33692 12.3084 8.12684C12.2981 7.64969 12.305 7.17255 12.305 6.6954C12.3265 6.68677 12.3475 6.67871 12.3691 6.67007H12.3685Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const productsList: Array<IProductsStyle> = [
  {
    title: 'Casual Collection',
    description:
      "Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.",
    products: [
      {
        title: 'Classic Denim Jeans',
        detail: 'Slim Fit',
        price: 49.99,
        image: '/images/products/product-1.png',
      },
      {
        title: 'Cozy Comfort Hoodie',
        detail: 'Relaxed Fit',
        price: 39.99,
        image: '/images/products/product-2.png',
      },
      {
        title: 'Classic Polo Shirt',
        detail: 'Regular Fit',
        price: 29.99,
        image: '/images/products/product-3.png',
      },
      {
        title: 'Chino Pants',
        detail: 'Slim Fit',
        price: 44.99,
        image: '/images/products/product-4.png',
      },
      {
        title: 'Classic Denim Jeans',
        detail: 'Slim Fit',
        price: 49.99,
        image: '/images/products/product-1.png',
      },
      {
        title: 'Cozy Comfort Hoodie',
        detail: 'Relaxed Fit',
        price: 39.99,
        image: '/images/products/product-2.png',
      },
      {
        title: 'Classic Polo Shirt',
        detail: 'Regular Fit',
        price: 29.99,
        image: '/images/products/product-3.png',
      },
      {
        title: 'Chino Pants',
        detail: 'Slim Fit',
        price: 44.99,
        image: '/images/products/product-4.png',
      },
    ],
  },
  {
    title: 'Formal Elegance',
    description:
      'Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.',
    products: [
      {
        title: 'Classic Charcoal Suit',
        detail: 'Slim Fit',
        price: 199.99,
        image: '/images/products/product-5.png',
      },
      {
        title: 'Black French Cuff Shirt',
        detail: 'Regular Fit',
        price: 39.99,
        image: '/images/products/product-6.png',
      },
      {
        title: 'Black Leather Oxford Shoes',
        detail: 'Black',
        price: 89.99,
        image: '/images/products/product-7.png',
      },
      {
        title: 'Classic Black Leather Belt',
        detail: 'Genuine Leather',
        price: 29.99,
        image: '/images/products/product-8.png',
      },
      {
        title: 'Classic Charcoal Suit',
        detail: 'Slim Fit',
        price: 199.99,
        image: '/images/products/product-5.png',
      },
      {
        title: 'Black French Cuff Shirt',
        detail: 'Regular Fit',
        price: 39.99,
        image: '/images/products/product-6.png',
      },
      {
        title: 'Black Leather Oxford Shoes',
        detail: 'Black',
        price: 89.99,
        image: '/images/products/product-7.png',
      },
      {
        title: 'Classic Black Leather Belt',
        detail: 'Genuine Leather',
        price: 29.99,
        image: '/images/products/product-8.png',
      },
    ],
  },
  {
    title: 'Active Lifestyle',
    description:
      "Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility.",
    products: [
      {
        title: 'Performance Jacket',
        detail: 'Athletic Fit',
        price: 59.99,
        image: '/images/products/product-9.png',
      },
      {
        title: 'Quick-Dry Athletic Shorts',
        detail: 'Relaxed Fit',
        price: 39.99,
        image: '/images/products/product-10.png',
      },
      {
        title: 'High-Performance Leggings',
        detail: 'Compression Fit',
        price: 44.99,
        image: '/images/products/product-11.png',
      },
      {
        title: 'Lightweight Running Shoes',
        detail: 'Black',
        price: 69.99,
        image: '/images/products/product-12.png',
      },
      {
        title: 'Performance Jacket',
        detail: 'Athletic Fit',
        price: 59.99,
        image: '/images/products/product-9.png',
      },
      {
        title: 'Quick-Dry Athletic Shorts',
        detail: 'Relaxed Fit',
        price: 39.99,
        image: '/images/products/product-10.png',
      },
      {
        title: 'High-Performance Leggings',
        detail: 'Compression Fit',
        price: 44.99,
        image: '/images/products/product-11.png',
      },
      {
        title: 'Lightweight Running Shoes',
        detail: 'Black',
        price: 69.99,
        image: '/images/products/product-12.png',
      },
    ],
  },
];

export default function Products() {
  const [activeClothingTypeIndex, setActiveClothingTypeIndex] = useState(0);

  return (
    <div className="mb-20 mt-10 space-y-[60px] laptop:mb-[100px] laptop:mt-20 desktop:mb-[150px] desktop:mt-40 desktop:space-y-20">
      <section className="wrapper flex flex-col gap-[30px] lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Discover Now"
          subtitle="Products"
          description="Dive into the world of fashion excellence at Klothink. Our curated selection brings together the latest trends and timeless classics, offering you a diverse array of clothing items that resonate with your unique style."
        />

        <div className="grid grid-cols-2 gap-y-5 rounded-[14px] border border-light-95 p-5 lg:flex-shrink-0 lg:grid-cols-3 laptop:px-10 laptop:py-[30px]">
          {heroGridData.map((data, index) => (
            <div
              key={index}
              className="space-y-1.5 border-light-95 odd:pr-4 even:border-l even:pl-4 lg:first:pr-4 laptop:min-w-[182px] laptop:space-y-2.5 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-4"
            >
              <h6 className="font-semibold text-grey-15 laptop:text-lg">
                {data.title}
              </h6>
              <p className="text-sm font-medium text-grey-40">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper overflow-x-auto">
        <div className="flex w-fit items-center gap-x-2.5 rounded-full border border-light-95 p-2.5 lg:mx-auto lg:justify-center">
          {clothingTypes.map((clothingType, index) => (
            <button
              key={index}
              onClick={() => setActiveClothingTypeIndex(index)}
              className={clsx(
                'flex items-center justify-center gap-x-1 text-nowrap rounded-full border py-3 text-sm font-medium uppercase transition-colors',
                {
                  'px-6': !clothingType.icon,
                  'px-4': clothingType.icon,
                  'border-light-95 bg-light-97 text-grey-30 hover:bg-primary-70':
                    activeClothingTypeIndex !== index,
                  'border-transparent bg-primary-50 text-grey-15':
                    activeClothingTypeIndex === index,
                }
              )}
            >
              {clothingType.icon}
              <span>{clothingType.title}</span>
            </button>
          ))}
        </div>
      </section>

      {productsList.map((productsStyle, i) => (
        <ProductsStyleSection key={i} productsStyle={productsStyle} index={i} />
      ))}
    </div>
  );
}
