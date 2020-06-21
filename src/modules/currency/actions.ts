import { CurrencyActionTypes } from './types';

export const selectCurrency = (payload: "eur" | "usd") => ({
  type: CurrencyActionTypes.SELECT_CURRENCY,
  payload
});