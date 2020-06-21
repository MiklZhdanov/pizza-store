import { CallApi } from 'modules/callApiSaga';
import { CartActionTypes, CartType } from './types';
import { api } from 'modules/api/api';

const { callApiAction } = CallApi;

export const addProductToCart = (payload: {id: number, quantity: number}) => ({
  type: CartActionTypes.ADD_PRODUCT_TO_CART,
  payload
});

export const createCart = () =>
  callApiAction({
    api: () => api.cart.createCart(),
    types: [
      CartActionTypes.CREATE_CART_REQUEST,
      CartActionTypes.CREATE_CART_SUCCESS,
      CartActionTypes.CREATE_CART_FAILURE
    ]
});

export const updateCart = (data: CartType) =>
  callApiAction({
    api: () => api.cart.updateCart(data),
    types: [
      CartActionTypes.UPDATE_CART_REQUEST,
      CartActionTypes.UPDATE_CART_SUCCESS,
      CartActionTypes.UPDATE_CART_FAILURE
    ]
});

export const getCart = ({id}: {id: number}) =>
  callApiAction({
    api: () => api.cart.getCart({id}),
    types: [
      CartActionTypes.GET_CART_REQUEST,
      CartActionTypes.GET_CART_SUCCESS,
      CartActionTypes.GET_CART_FAILURE
    ]
});

export const checkoutCart = (payload: {cart: CartType, delivery: string, address: string, email: string} ) => ({
  type: CartActionTypes.CHECKOUT_CART,
  payload
});