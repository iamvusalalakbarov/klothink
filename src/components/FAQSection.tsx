'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import SectionHeading from './ui/SectionHeading';
import { Accordion } from '@mantine/core';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useMediaQuery } from '@mantine/hooks';

const faqCategories = [
  'All',
  'Ordering',
  'Shipping',
  'Returns',
  'Customer Support',
];

const faqs = [
  {
    question: 'Can I modify my order after placing it?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'How do I initiate a return?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'How can I unsubscribe from the newsletter?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'Do you offer exchanges for products?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'How can I place an order on Klothink?',
    answer:
      'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'What is your shipping policy?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'Are there any additional fees for returns?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'How do I create an account on Klothink?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'Can I change my account information?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
  {
    question: 'Are my personal details secure on Klothink?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur facere tempora atque perspiciatis eaque autem delectus sunt perferendis ipsum!',
  },
];

const FAQSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeFaqValue, setActiveFaqValue] = useState<string | null>(null);
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <section className="wrapper mb-20 space-y-10 laptop:mb-[150px] laptop:space-y-[60px]">
      <SectionHeading
        title="Questions? We Have Answers."
        subtitle="FAQ"
        description="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
      />

      <div className="flex items-center gap-x-2.5 overflow-x-auto border-y border-light-95 py-5 laptop:gap-x-4 laptop:py-[30px]">
        {faqCategories.map((category, index) => (
          <React.Fragment key={index}>
            <span
              onClick={() => setActiveCategoryIndex(index)}
              className={clsx('cursor-pointer text-nowrap uppercase', {
                'font-semibold text-grey-10': activeCategoryIndex === index,
                'font-medium text-grey-60': activeCategoryIndex !== index,
              })}
            >
              {category}
            </span>
            {faqCategories.length > index + 1 && (
              <span className="h-[22px] w-px flex-shrink-0 bg-light-95 desktop:h-[27px]"></span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: isLargeScreen ? 3 : 2 }).map((_, i) => {
          const start = Math.floor((faqs.length / 3) * i);
          const end = Math.floor((faqs.length / 3) * (i + 1));

          return (
            <Accordion
              key={i}
              chevron={
                <PlusIcon className="size-5 text-[#4C4C4C] laptop:size-6" />
              }
              classNames={{
                root: 'faq-accordion-root',
                item: 'faq-accordion-item',
                control: 'faq-accordion-control',
                chevron: 'faq-accordion-chevron',
                label: 'faq-accordion-label',
                content: 'faq-accordion-content',
              }}
              value={activeFaqValue}
              onChange={setActiveFaqValue}
            >
              {faqs.slice(start, end).map((faq, j) => (
                <Accordion.Item key={j} value={faq.question}>
                  <Accordion.Control>{faq.question}</Accordion.Control>
                  <Accordion.Panel>{faq.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
