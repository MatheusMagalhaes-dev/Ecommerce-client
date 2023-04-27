import type { TTimestamps } from '$lib/ts';
import type { IProduct } from './product.interface';

export interface ICart extends TTimestamps {
  _id: string;
  user: string;
  products: [
    {
      product: IProduct;
      quantity: number;
    }
  ];
}

