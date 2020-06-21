import { CurrencyStateType, CurrencyActionTypes } from "./types";

const initialState: CurrencyStateType = {
  currentCurrency: "eur"
};

export default function (state = initialState, action: any): CurrencyStateType {
  switch (action.type) {
    case CurrencyActionTypes.SELECT_CURRENCY:
      return {...state, currentCurrency: action.payload }
    default:
      return state;
  }
}
