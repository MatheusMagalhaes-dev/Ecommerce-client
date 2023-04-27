import type { TTimestamps } from "$lib/ts";

export interface IProduct extends TTimestamps {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
