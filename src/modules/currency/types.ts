const moduleName = '@@currency';

export type CurrencyStateType = {
  currentCurrency: "eur" | "usd"
}

export const CurrencyActionTypes = {
  SELECT_CURRENCY: `${moduleName}/SELECT_CURRENCY`,
};
