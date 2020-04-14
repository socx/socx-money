import {
  SOURCE_AMOUNT_CHANGED, SOURCE_CURRENCY_CHANGED,
  DESTINATION_AMOUNT_CHANGED, DESTINATION_CURRENCY_CHANGED,
  GET_SOURCE_CURRENCIES, GET_DESTINATION_CURRENCIES
} from './constants';


export const sourceAmountChanged = (newSourceAmount) => async (dispatch, getState) => {
  const { rate } = getState().welcome;
  dispatch({
    type: SOURCE_AMOUNT_CHANGED,
    payload: {
      sourceAmount: Number(newSourceAmount),
      destinationAmount: Number(newSourceAmount) * rate
    }
  })
}

export const sourceCurrencyChanged = (newSourceCurrency) => async (dispatch, getState) => {
  const { sourceAmount, rate, fees } = getState().welcome;
  return dispatch => {
    dispatch({
      type: SOURCE_CURRENCY_CHANGED,
      payload: {
        sourceCurrency: newSourceCurrency,
        rate,
        fees,
        destinationAmount: sourceAmount * rate
      }
    })
  }
}

export const destinationAmountChanged = (newDestinationAmount) => async (dispatch, getState) => {
  const { rate } = getState().welcome;
  dispatch({
    type: DESTINATION_AMOUNT_CHANGED,
    payload: {
      sourceAmount: newDestinationAmount * (1/rate),
      destinationAmount: newDestinationAmount
    }
  })
}

export const destinationCurrencyChanged = (newDestinationCurrency) => async (dispatch, getState) => {
  const { destinationAmount, rate, fees } = getState().welcome;
  return dispatch => {
    dispatch({
      type: DESTINATION_CURRENCY_CHANGED,
      payload: {
        sourceCurrency: newDestinationCurrency,
        rate,
        fees,
        sourceAmount: destinationAmount * (1/rate)
      }
    })
  }
}

export const getSourceCurrencies = () => {
  return dispatch => {
    dispatch({
      type: GET_SOURCE_CURRENCIES,
      payload: [
        {code: 'GBP', description: 'Pounds Sterling'},
        {code: 'CAD', description: 'Canadian Dollars'}
      ]
    })
  }
}

export const getDestinationCurrencies = () => {
  return dispatch => {
    dispatch({
      type: GET_DESTINATION_CURRENCIES,
      payload: [
        {code: 'GHS', description: 'Ghanaian Cedis'},
        {code: 'KSH', description: 'Kenyan Shillings'},
        {code: 'NGN', description: 'Nigerian Naira'}
      ]
    })
  }
}