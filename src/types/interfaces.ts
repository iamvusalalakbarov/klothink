export interface IProduct {
  title: string;
  detail: string;
  price: number;
  image: string;
}

export interface IProductsStyle {
  title: string;
  description: string;
  products: Array<IProduct>;
}

export interface IReview {
  customer: string;
  comment: string;
  stars: number;
  avatar: string;
}

export interface IFaq {
  question: string;
  answer: string;
}