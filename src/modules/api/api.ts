import { products } from 'modules/products/api';
import { cart } from 'modules/cart/api';
import { auth } from 'modules/auth/api';
import { delivery } from 'modules/delivery/api';

export const api = {
  products,
  cart,
  auth,
  delivery
};

export default api;