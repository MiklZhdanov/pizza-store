export type CartType = {
  id: number;
  items: {
    id: number;
    quantity: number;
  }[]
};

export type CartStateType = {
  selectedCart?: CartType;
  loading: boolean;
};

const moduleName = '@@cart';

export const CartActionTypes = {
  CREATE_CART_REQUEST: `${moduleName}/CREATE_CART_REQUEST`,
  CREATE_CART_SUCCESS: `${moduleName}/CREATE_CART_SUCCESS`,
  CREATE_CART_FAILURE: `${moduleName}/CREATE_CART_FAILURE`,

  UPDATE_CART_REQUEST: `${moduleName}/UPDATE_CART_REQUEST`,
  UPDATE_CART_SUCCESS: `${moduleName}/UPDATE_CART_SUCCESS`,
  UPDATE_CART_FAILURE: `${moduleName}/UPDATE_CART_FAILURE`,

  ADD_PRODUCT_TO_CART: `${moduleName}/ADD_PRODUCT_TO_CART`,
  CHECKOUT_CART: `${moduleName}/CHECKOUT_CART`
};
