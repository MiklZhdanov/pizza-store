import { request } from 'modules/api/request';

export const products = {
  getProducts: async () =>
    await request.get(`/products`),
  getProduct: async ({id}: {id: number}) =>
    await request.get(`/products/${id}`),
};
