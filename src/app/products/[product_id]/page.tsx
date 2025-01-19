import ProductDetailSection from '@/components/ProductDetailSection';
import FaqList from '@/components/ui/FaqList';
import Reviews from '@/components/ui/Reviews';
import SectionHeading from '@/components/ui/SectionHeading';
import { IFaq, IReview } from '@/types/interfaces';

interface IProductDetailPageProps {
  params: Promise<{ product_id: string }>;
}

const reviews: Array<IReview> = [
  {
    customer: 'Alex M',
    comment:
      "Absolutely love this denim jacket! The fit is perfect, and the distressed detailing gives it a rugged yet stylish look. It's become my go-to piece for casual outings. Highly recommend!",
    stars: 5,
    avatar: '/images/customers/customer-alex-m.png',
  },
  {
    customer: 'Emily S',
    comment:
      'Great quality and versatile styling options. The buttons are sturdy, and the jacket feels well-made. I deducted one star because I wish it had an inside pocket, but overall.',
    stars: 5,
    avatar: '/images/customers/customer-emily-walker.png',
  },
  {
    customer: 'Chris B',
    comment:
      "Urban Explorer exceeded my expectations. The denim is of excellent quality, and the fit is just right. It's become my favorite jacket for weekend adventures.",
    stars: 5,
    avatar: '/images/customers/customer-rajesh-patel.png',
  },
  {
    customer: 'Alex M',
    comment:
      "Absolutely love this denim jacket! The fit is perfect, and the distressed detailing gives it a rugged yet stylish look. It's become my go-to piece for casual outings. Highly recommend!",
    stars: 5,
    avatar: '/images/customers/customer-alex-m.png',
  },
  {
    customer: 'Emily S',
    comment:
      'Great quality and versatile styling options. The buttons are sturdy, and the jacket feels well-made. I deducted one star because I wish it had an inside pocket, but overall.',
    stars: 5,
    avatar: '/images/customers/customer-emily-walker.png',
  },
  {
    customer: 'Chris B',
    comment:
      "Urban Explorer exceeded my expectations. The denim is of excellent quality, and the fit is just right. It's become my favorite jacket for weekend adventures.",
    stars: 5,
    avatar: '/images/customers/customer-rajesh-patel.png',
  },
];

const faqs: Array<IFaq> = [
  {
    question: 'Does the jacket come in different colors?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Are there any inside pockets in the jacket?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Can I machine wash the denim jacket?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'How do I style the jacket for different occasions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'What is the material of the Urban Explorer Denim Jacket?',
    answer:
      'The jacket is crafted from high-quality denim, composed of 100% cotton for a comfortable and durable wear.',
  },
  {
    question: 'How do I determine the right size for me?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Can I machine wash the denim jacket?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Does the jacket come in different colors?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Is the distressed detailing on the jacket prone to fraying?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Does the jacket come in different colors?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'Can I machine wash the denim jacket?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
  {
    question: 'How do I style the jacket for different occasions?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, voluptatum!',
  },
];

export default async function ProductDetail(props: IProductDetailPageProps) {
  const productId = (await props.params).product_id;

  return (
    <div className="mb-20 mt-10 space-y-20 laptop:mb-[100px] laptop:mt-20 laptop:space-y-[150px] desktop:mb-[150px] desktop:mt-[117px] desktop:space-y-[200px]">
      <ProductDetailSection />

      <section className="wrapper space-y-10 laptop:space-y-[60px]">
        <SectionHeading
          title="Reviews"
          subtitle="Product Reviews"
          description="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion."
        />

        <Reviews reviews={reviews} />
      </section>

      <section className="wrapper space-y-10 laptop:space-y-[60px]">
        <SectionHeading
          title="Frequently asked questions"
          subtitle="FAQ"
          description="Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience."
        />

        <FaqList faqs={faqs} />
      </section>
    </div>
  );
}
