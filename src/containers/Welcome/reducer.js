import * as constants from './constants'

const initialState = {
  sourceCurrencies: [],
  sourceCurrency: 'GBP',
  sourceAmount: 100,
  destinationCurrencies : [],
  destinationCurrency: 'NGN',
  destinationAmount: 48587.43,
  fees: 1.99,
  rate: 485.8743,
}

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case constants.SOURCE_AMOUNT_CHANGED:
      return {
        ...state,
        sourceAmount: payload.sourceAmount,
        destinationAmount: payload.destinationAmount
      }
    case constants.SOURCE_CURRENCY_CHANGED:
      return {
        ...state,
        sourceCurrency: payload.sourceCurrency,
        rate: payload.rate,
        fees: payload.fees,
        destinationAmount: payload.destinationAmount
      }
    case constants.DESTINATION_CURRENCY_CHANGED:
      return {
        ...state,
        destinationCurrency: payload.destinationCurrency,
        rate: payload.rate,
        fees: payload.fees,
        sourceAmount: payload.sourceAmount
      }
    case constants.DESTINATION_AMOUNT_CHANGED:
      return {
        ...state,
        sourceAmount: payload.sourceAmount,
        destinationAmount: payload.destinationAmount
      }
    case constants.GET_SOURCE_CURRENCIES:
      return {
        ...state,
        sourceCurrencies: payload
      }
    case constants.GET_DESTINATION_CURRENCIES:
      return {
        ...state,
        destinationCurrencies: payload
      }
    default:
      return state
  }
}