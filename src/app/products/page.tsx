import SectionHeading from '@/components/ui/SectionHeading';

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

export default function Products() {
  return (
    <>
      <div className="wrapper flex flex-col gap-[30px] pb-[60px] pt-10 lg:flex-row lg:items-end lg:justify-between laptop:pt-20 desktop:pb-20 desktop:pt-40">
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
      </div>
    </>
  );
}
