'use client';

import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Accordion } from '@mantine/core';
import { PlusIcon } from '@heroicons/react/24/solid';
import { IFaq } from '@/types/interfaces';

interface IFaqListProps {
  faqs: IFaq[];
}

const FaqList: React.FC<IFaqListProps> = (props) => {
  const [activeFaqValue, setActiveFaqValue] = useState<string | null>(null);
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: isLargeScreen ? 3 : 2 }).map((_, i) => {
        const start = Math.floor((props.faqs.length / 3) * i);
        const end = Math.floor((props.faqs.length / 3) * (i + 1));

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
            {props.faqs.slice(start, end).map((faq, j) => (
              <Accordion.Item key={j} value={`${i}-${j}`}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        );
      })}
    </div>
  );
};

export default FaqList;
