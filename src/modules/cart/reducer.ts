import { CartActionTypes, CartStateType } from './types';

const initialState: CartStateType = {
  loading: false,
  selectedCart: undefined
};

export default function(state = initialState, action: any): CartStateType {
  switch (action.type) {
    case CartActionTypes.CREATE_CART_REQUEST:
    case CartActionTypes.UPDATE_CART_REQUEST:
      return { ...state, loading: true };
    case CartActionTypes.CREATE_CART_SUCCESS:
    case CartActionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        selectedCart: action.payload,
        loading: false
      };
    case CartActionTypes.CREATE_CART_FAILURE:
    case CartActionTypes.UPDATE_CART_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
