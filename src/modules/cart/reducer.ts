import { CartActionTypes, CartStateType } from './types';
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState: CartStateType = {
  loading: false,
  selectedCart: undefined,
  checkoutSuccess: undefined
};

export default function(state = initialState, action: any): CartStateType {
  switch (action.type) {
    case LOCATION_CHANGE:
      return { ...state, checkoutSuccess: undefined};
    case CartActionTypes.CHECKOUT_CART:
      return { ...state, checkoutSuccess: action.payload.cart.id };
    case CartActionTypes.CREATE_CART_REQUEST:
    case CartActionTypes.UPDATE_CART_REQUEST:
    case CartActionTypes.GET_CART_REQUEST:
      return { ...state, loading: true };
    case CartActionTypes.CREATE_CART_SUCCESS:
    case CartActionTypes.UPDATE_CART_SUCCESS:
      case CartActionTypes.GET_CART_SUCCESS:

      return {
        ...state,
        selectedCart: action.payload,
        loading: false
      };
    case CartActionTypes.GET_CART_FAILURE:
    case CartActionTypes.CREATE_CART_FAILURE:
    case CartActionTypes.UPDATE_CART_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
