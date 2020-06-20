import { request } from 'modules/api/request';
import { CartType } from './types';

export const cart = {
  createCart: async () =>
    await request.post(`/carts`, {
      items: []
    }),
  updateCart: async (data: CartType) =>
    await request.put(`/carts/${data.id}`, data),
};
