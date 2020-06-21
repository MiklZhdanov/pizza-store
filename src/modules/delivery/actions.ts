import { CallApi } from 'modules/callApiSaga';
import { DeliveryActionTypes, DeliveryType } from './types';
import { api } from 'modules/api/api';

const { callApiAction } = CallApi;

export const addProductToCart = (payload: DeliveryType) => ({
  type: DeliveryActionTypes.SELECT_DELIVERY,
  payload
});

export const getDeliveries = () =>
  callApiAction({
    api: () => api.delivery.getDeliveries(),
    types: [
      DeliveryActionTypes.GET_DELIVERIES_REQUEST,
      DeliveryActionTypes.GET_DELIVERIES_SUCCESS,
      DeliveryActionTypes.GET_DELIVERIES_FAILURE
    ]
});