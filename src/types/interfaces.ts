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