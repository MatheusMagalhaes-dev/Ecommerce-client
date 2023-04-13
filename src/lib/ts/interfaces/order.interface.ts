import type { IAddress, TTimestamps } from '$lib/ts';
import type { IProduct } from './product.interface';


export interface IOrder extends TTimestamps {
  user: string;
  deliveryAddress: IAddress;
  totalPrice: number;
  status: 'pending' | 'canceled' | 'delivered';
  observation: string;
  products: [
    {
      product: IProduct;
      quantity: number;
    }
  ];
}
