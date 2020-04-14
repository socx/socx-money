import {
  SOURCE_AMOUNT_CHANGED, SOURCE_CURRENCY_CHANGED,
  DESTINATION_AMOUNT_CHANGED, DESTINATION_CURRENCY_CHANGED,
  GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAILED,
  GET_RATES_REQUEST, GET_RATES_SUCCESS, GET_RATES_FAILED
} from './constants';
import {
  QA_API_BASE, LOCAL_API_BASE,
  CURRENCIES_ENDPOINT, RATES_ENDPOINT,
  HTTP_200
} from 'constants/common';
import axios from 'axios';

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
        destinationCurrency: newDestinationCurrency,
        rate,
        fees,
        sourceAmount: destinationAmount * (1/rate)
      }
    })
  }
}

// export const destinationCurrencyChanged = (newDestinationCurrency) => async (dispatch, getState) => {
//   const { sourceCurrency, destinationAmount } = getState().welcome;
//   const exchangeRate = await this.getExchangeRate(sourceCurrency, newDestinationCurrency);
//   dispatch({
//     type: DESTINATION_CURRENCY_CHANGED,
//     payload: {
//       destinationCurrency: newDestinationCurrency,
//       rate: exchangeRate.rate,
//       fees: exchangeRate.fees,
//       sourceAmount: destinationAmount * (1/exchangeRate.rate)
//     }
//   })
// }

// export const getExchangeRate = (sourceCurrency, destinationCurrency) => {
//   return new Promise((resolve, reject) => {
//     const url =  `${QA_API_BASE}${CURRENCIES_ENDPOINT}` ||
//       `${LOCAL_API_BASE}${RATES_ENDPOINT}/${sourceCurrency}/destination/${destinationCurrency}`;
//     axios.get(url)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error))
//   })
// }

export const getCurrencies = () => async (dispatch) => {
  const mockData = {
    sourceCurrencies: [
      {code: 'GBP', description: 'Pounds Sterling'},
      {code: 'CAD', description: 'Canadian Dollars'}
    ],
    destinationCurrencies: [
      {code: 'GHS', description: 'Ghanaian Cedis'},
      {code: 'KSH', description: 'Kenyan Shillings'},
      {code: 'NGN', description: 'Nigerian Naira'}
    ],
  };
  const url =  `${QA_API_BASE}${CURRENCIES_ENDPOINT}` ||
    `${LOCAL_API_BASE}${CURRENCIES_ENDPOINT}`;
  dispatch({type: GET_CURRENCIES_REQUEST})
  axios.get(url)
    .then((response) => {
      if (response.status === HTTP_200 && response.data.length) {
        const { sourceCurrencies, destinationCurrencies } = response.data;
        dispatch({
          type: GET_CURRENCIES_SUCCESS,
          payload: { sourceCurrencies, destinationCurrencies }
        })
      } else {
        dispatch({
          type: GET_CURRENCIES_SUCCESS,
          payload: mockData
        })
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_CURRENCIES_FAILED,
        payload: mockData
      })
    })
}