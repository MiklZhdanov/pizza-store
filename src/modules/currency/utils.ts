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

export const getPriceWithCurrency = ({price, currency = 'eur'}: {price: number, currency?: 'eur' | 'usd'}) => {
    return `${(currencies[currency].value*price).toFixed(2)} ${currencies[currency].short}`
}