import { DeliveryActionTypes, DeliveryStateType } from "./types";

const initialState: DeliveryStateType = {
  loading: false,
  items: [],
  selectedDelivery: undefined,
};

export default function (state = initialState, action: any): DeliveryStateType {
  switch (action.type) {
    case DeliveryActionTypes.SELECT_DELIVERY:
      return {...state, selectedDelivery: action.payload }
    case DeliveryActionTypes.GET_DELIVERIES_REQUEST:
      return { ...state, loading: true };
    case DeliveryActionTypes.GET_DELIVERIES_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DeliveryActionTypes.GET_DELIVERIES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
