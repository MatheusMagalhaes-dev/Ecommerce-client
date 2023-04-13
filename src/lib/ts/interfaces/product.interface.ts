import type { TTimestamps } from "$lib/ts";

export interface IProduct extends TTimestamps {
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
