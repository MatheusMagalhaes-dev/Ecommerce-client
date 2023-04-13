import type { TTimestamps } from '$lib/ts';
import type { IProduct } from './product.interface';

export interface ICart extends TTimestamps {
  user: string;
  products: [
    {
      product: IProduct;
      quantity: number;
    }
  ];
}

