import { CallApi } from 'modules/callApiSaga';
import { ProductsActionTypes } from './types';
import { api } from 'modules/api/api';

const { callApiAction } = CallApi;

export const getProducts = () =>
  callApiAction({
    api: () => api.products.getProducts(),
    types: [
        ProductsActionTypes.GET_PRODUCTS_REQUEST,
        ProductsActionTypes.GET_PRODUCTS_SUCCESS,
        ProductsActionTypes.GET_PRODUCTS_FAILURE
    ]
});

export const getProduct = ({id} : {id: number}) =>
  callApiAction({
    api: () => api.products.getProduct({id}),
    types: [
        ProductsActionTypes.GET_PRODUCT_REQUEST,
        ProductsActionTypes.GET_PRODUCT_SUCCESS,
        ProductsActionTypes.GET_PRODUCT_FAILURE
    ]
});