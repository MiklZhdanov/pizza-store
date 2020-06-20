import { ProductsActionTypes, ProductsStateType } from './types';

const initialState: ProductsStateType = {
  loading: false,
  items: []
};

export default function(state = initialState, action: any): ProductsStateType {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case ProductsActionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
