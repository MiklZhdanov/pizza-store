import { useSelector } from 'react-redux';
import { AppState } from 'store';

const currencies = {
    'eur': {
        short: "€",
        value: 1
    }, 
    'usd': {
        short: "$",
        value: 0.89
    }
}

export const usePrice = () => {
    const { currency } = useSelector((state: AppState) => ({
        currency: state.currency.currentCurrency
      }))

const getPriceWithCurrency = ({price}: {price: number}) => {
        return `${(currencies[currency].value*price).toFixed(2)} ${currencies[currency].short}`
    }

  return {getPriceWithCurrency};
}