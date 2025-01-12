import AboutUsSection from '@/components/AboutUsSection';
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SectionHeading from '@/components/ui/SectionHeading';

const experienceSteps = [
  {
    title: 'Discover Trends',
    description: 'Explore our curated collection of over 1000 styles',
  },
  {
    title: 'Secure Checkout',
    description:
      'Add your items to the cart and proceed to our secure checkout.',
  },
  {
    title: 'Swift Dispatch',
    description: 'Experience 95% same-day dispatch on orders.',
  },
  {
    title: 'Unbox Happiness',
    description: 'Receive your carefully packaged Klothink order.',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <ProductsSection />

      <AboutUsSection />

      <TestimonialsSection />

      <FAQSection />

      {/* How it Works ? */}
      <section className="wrapper mb-10 space-y-10 laptop:mb-[100px] laptop:space-y-[50px] desktop:mb-[150px] desktop:space-y-20">
        <SectionHeading
          title="Seamless Experience."
          subtitle="How it Works ?"
          description="At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease."
        />

        <div className="flex flex-col gap-2.5 rounded-2xl border border-light-97 bg-light-99 p-2.5 lg:flex-row laptop:gap-4 laptop:p-4 desktop:gap-5 desktop:rounded-[20px] desktop:p-5">
          {experienceSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-x-5 rounded-xl border border-light-95 bg-white p-6 lg:w-full laptop:flex-col laptop:items-start laptop:gap-y-5 desktop:gap-y-[30px] desktop:p-[30px]"
            >
              <span className="text-[50px] font-semibold text-light-90 laptop:text-[60px] desktop:text-[80px]">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="space-y-1 laptop:space-y-1.5 desktop:space-y-2.5">
                <h6 className="font-semibold text-[#333] laptop:text-lg desktop:text-xl">
                  {step.title}
                </h6>
                <p className="text-sm text-grey-40 desktop:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
