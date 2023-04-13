import type { IProduct } from '$lib/ts';

export type TQueryPrdocut = Partial<
  Omit<IProduct, '_id' | 'description' | 'createdAt' | 'updatedAt'>
>;
