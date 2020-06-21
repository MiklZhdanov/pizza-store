export type DeliveryType = {
  id: number;
  name: string;
  price: number;
};

export type DeliveryStateType = {
  selectedDelivery?: DeliveryType;
  items: DeliveryType[];
  loading: boolean;
};

const moduleName = '@@delivery';

export const DeliveryActionTypes = {
  GET_DELIVERIES_REQUEST: `${moduleName}/GET_DELIVERIES_REQUEST`,
  GET_DELIVERIES_SUCCESS: `${moduleName}/GET_DELIVERIES_SUCCESS`,
  GET_DELIVERIES_FAILURE: `${moduleName}/GET_DELIVERIES_FAILURE`,

  SELECT_DELIVERY: `${moduleName}/SELECT_DELIVERY`,
};
